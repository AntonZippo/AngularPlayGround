import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { minAgeValidator } from '../../validators/min-age.validator';
import { correctPassValidator } from '../../validators/correctPassValidator';
import { passwordMatchValidator } from '../../validators/passConfirmValidator';
import { UserForm } from './formInterface';
import { ChangeDetectorRef } from '@angular/core';



@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
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
constructor(private cdr: ChangeDetectorRef) {}

 submittedData: UserForm[] = [];
 hobbyArr : string[] = [];
 
  addHobby(){
   const hobby = this.myForm.controls['hobbies'].value
  if(hobby){
    this.hobbyArr.push(hobby);
    this.myForm.controls['hobbies'].reset(); 
  }
  }
  deleteHobby(){
    if (this.hobbyArr.length == 0){
      return
    }
    this.hobbyArr.pop();
  }


 submitForm() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const formValue = {
      ...this.myForm.value,
      hobbies : this.hobbyArr.join(', ')
    };

    this.submittedData.push(formValue as UserForm);
    console.log('Сохранено:', this.submittedData);

    this.myForm.reset({
  email: '',
  username: '',
  birthdate: '',
  password: '',
  confirmPassword: '',
  hobbies: ''
}); 
  this.hobbyArr = [];
    this.cdr.markForCheck();
  }
}