import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
    forgotPassowrdForm!: FormGroup;
    isFormSubmit = false;
    emailValidation = "^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$";

    constructor(
        private fb: FormBuilder,
        private router: Router,
    ) {
        this.setDefaultData();
    }

    ngOnInit(): void {
        
    }

    get f() {
        return this.forgotPassowrdForm.controls;
    }

    setDefaultData() {
        this.isFormSubmit = false;
        this.forgotPassowrdForm = this.fb.group({
            email: [ '', [
                Validators.required,
                Validators.pattern(this.emailValidation) 
            ]]
        });
    }

    submitForm() {
        this.isFormSubmit = true;

        if (this.forgotPassowrdForm.invalid) {
            return;
        }

        this.router.navigate(['/auth/login']);
    }

    openLoginPage() {
        this.router.navigate(['/auth/login']);
    }
}
