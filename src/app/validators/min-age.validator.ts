import { AbstractControl,ValidationErrors,ValidatorFn } from "@angular/forms";

export function minAgeValidator (minAge : number): ValidatorFn {

return (control : AbstractControl): ValidationErrors | null => {
    const value = control.value
    if (!value) return null

    const date = new Date(value)
    if (isNaN(date.getDate())){
        return {invalidDate : true};
    }

    const today = new Date();
    let age = today.getFullYear() - date.getFullYear();
    const monthDiff = today.getMonth() - date.getMonth();
    const dayDiff = today.getDate() - date.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    return age < minAge ? { minAge: { requiredAge: minAge, actualAge: age } } : null;
  };
}