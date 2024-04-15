import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements AfterViewInit {

  /**
   * Constructor that injects ElementRef and TranslationService.
   * @param el Reference to the element of the component.
   * @param translationService Manages language settings.
   */
  constructor(private el: ElementRef, public translationService: TranslationService) { }

  /**
   * Initializes an observer for the element to trigger animations upon entry into the viewport.
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

    const aboutMeElement = this.el.nativeElement.querySelector('#aboutMe');
    observer.observe(aboutMeElement);
  }
}