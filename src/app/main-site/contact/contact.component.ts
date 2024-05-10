import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../translation.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {
  contactForm!: FormGroup;
  private el: ElementRef;
  messageStatus: string | null = null;

  constructor(private elementRef: ElementRef, private router: Router, public translationService: TranslationService, private fb: FormBuilder, private http: HttpClient) {
    this.el = elementRef;
  }

  /**
   * Initializes the form with validation rules.
   */
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      agreed: [false, Validators.requiredTrue]
    });
  }

  /**
  * Quick access to form fields.
  */
  get f() {
    return this.contactForm.controls;
  }

  /**
   * Called when the form is submitted.
   */
  onSubmit() {
    if (this.contactForm.valid) {
      const formData: any = this.contactForm.value;
      formData['form-name'] = 'contact';
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      this.http.post('/', new URLSearchParams(formData).toString(), { headers, responseType: 'text' })
        .subscribe(
          response => {
            this.messageStatus = 'Message sent successfully.';
            setTimeout(() => {
              this.messageStatus = null;
            }, 5000);
            this.contactForm.reset();
          }
        );
    } else {
      console.log('Form is invalid or agreement not checked.');
    }
  }

  /**
   * Navigates to the privacy page and scrolls to the specified id.
   */
  dataProtection() {
    this.router.navigateByUrl('/imprint').then(() => {
      setTimeout(() => {
        const targetElement = document.getElementById('minScroll');
        if (targetElement) {
          const yOffset = this.calculateDynamicOffset() + 100;
          const yPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - yOffset;

          window.scrollTo({ top: yPosition, behavior: 'smooth' });
        }
      }, 0);
    });
  }

  /**
   * Calculates dynamic offset based on navigation bar height.
   * @returns {number} The calculated offset value.
   */
  calculateDynamicOffset(): number {
    const navbar = document.getElementById('hOneDz') as HTMLElement;
    if (navbar) {
      return navbar.offsetHeight;
    } else {
      return 0;
    }
  }

  /**
   * Initializes an observer for the contact section to animate upon entry into the viewport.
   */
  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 });

    const contactElement = this.el.nativeElement.querySelector('#contact');
    observer.observe(contactElement);
  }

  // Go up
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}