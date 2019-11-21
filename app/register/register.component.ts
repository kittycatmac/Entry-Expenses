import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  registerForm: FormGroup;

    constructor(private fb: FormBuilder,
                private service: AuthService) {


      this.registerForm = fb.group({
        UserName: ['', Validators.required],
        Password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      }, {validator: matchingFields('Passsword', 'confirmPassword')});
    }

    onSubmit() {
      delete this.registerForm.value.confirmPassword;
      this.service.register(this.registerForm.value).subscribe((data:any) => {
        console.log(data);
        localStorage.setItem('userName', data.UserName);
        localStorage.setItem('token_value', data.Token);
      })
    }
}

// within this function value is throwing error when form.controls[field1].value
  function matchingFields(field1, field2) {
    return form => {
     if (form.controls[field1] !== form.controls[field2]) {
       return {matchingFields: true};
      }
    };
  }
