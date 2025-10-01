import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function correctPassValidator() : ValidatorFn {
    return (control : AbstractControl) : ValidationErrors | null => {
        const value = control.value

        let specialSymbol  = false;
        let upperSymbol = false;

        if (value.length < 3) {
      return { invalidPass: 'Password must be at least 3 characters long!' };
    }
    
        if (!value) return null;

        const UpperErr = "Shold be at least one Upper letter!";
        const SpecialErr = "Shold be at least one special symbol!";

        for (const letter of value){
            if (['!', '#', '$', '%', '&'].includes(letter)) {
            specialSymbol = true
            }
            if (letter == letter.toUpperCase() && letter.toLowerCase() !== letter.toUpperCase()) 
            upperSymbol = true

            if (specialSymbol && upperSymbol){
                break
            }
                
        }

        return specialSymbol 
        ? (upperSymbol ? null : {invalidPass : UpperErr})
        : {invalidPass : SpecialErr }
}
}