import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('contactForm') form!: NgForm;

  constructor(private el: ElementRef, private router: Router, public translationService: TranslationService) { }

  contactData = {
    name: "",
    email: "",
    message: "",
    agreed: false,
  };

  /**
   * Called when the form is submitted.
   * @param ngForm Reference to the Angular form.
   */
  onSubmit() {
    if (this.form.valid && this.form.value.agreed) {
      
    } else {
      alert('Bitte füllen Sie alle erforderlichen Felder korrekt aus und stimmen Sie der Datenschutzrichtlinie zu.');
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