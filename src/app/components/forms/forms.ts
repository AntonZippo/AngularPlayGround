import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { minAgeValidator } from '../../validators/min-age.validator';
import { correctPassValidator } from '../../validators/correctPassValidator';
import { passwordMatchValidator } from '../../validators/passConfirmValidator';


@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.scss'
})
export class Forms {
myForm = new FormGroup(
  {
  email : new FormControl('', [Validators.required , Validators.email]),
  username : new FormControl('', [Validators.required , Validators.minLength(3)]),
  birthdate : new FormControl('', [Validators.required, minAgeValidator(14)]),
  password : new FormControl('', [Validators.required, Validators.minLength(3), correctPassValidator()]),
  confirmPassword : new FormControl('', Validators.required),
  hobbies : new FormControl ('')
 },
 {validators : passwordMatchValidator}
);

 submittedData: any = null;
 submitForm() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    this.submittedData = { ...this.myForm.value }; 
    console.log('Сохранённые данные:', this.submittedData);
  }
}
