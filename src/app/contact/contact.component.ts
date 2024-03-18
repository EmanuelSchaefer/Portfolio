import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  onSubmit(ngForm: NgForm) {
    if(ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
    }
  }

}