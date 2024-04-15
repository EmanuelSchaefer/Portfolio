import { Component, inject, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit {
  constructor(private el: ElementRef, private router: Router, public translationService: TranslationService) { }

  // Contact form data initialization.
  contactData = {
    name: "",
    email: "",
    message: "",
    agreed: false,
  }

  mailTest = true;

  http = inject(HttpClient);

  // for the POST request.
  post = {
    endPoint: 'https://emanuel-portfolio.netlify.app/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  /**
   * Processes the submission of the contact form.
   * @param ngForm Reference to the Angular form.
   */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
        .subscribe({
          next: (response) => {
            console.info('Formular erfolgreich gesendet');
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.info('Testmodus aktiv, E-Mail nicht gesendet.');
      ngForm.resetForm();
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

}