import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    
    loginForm!: FormGroup;
    isFormSubmit = false;
    emailValidation = environment.emailValidation;
    passwordValidation = environment.passwordValidation;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private auth: AuthService
    ) {
        this.setDefaultData();
    }

    ngOnInit(): void {
        
    }

    get f() {
        return this.loginForm.controls;
    }
    
    setDefaultData() {
        this.isFormSubmit = false;
        this.loginForm = this.fb.group({
            email: [ '', [
                Validators.required,
                // Validators.pattern(this.emailValidation) 
            ]],
            password: ['', [
                Validators.required,
                // Validators.pattern(this.passwordValidation)
            ]]
        });
    }

    submitForm() {
        this.isFormSubmit = true;

        if (this.loginForm.invalid) {
            return;
        }

        let request = {
            username: this.loginForm.value.email,
            password: this.loginForm.value.password
        };
        
        this.auth.login(request).subscribe((response: any) => {
            console.log(response);
            
            // let data = response.body.item;
            // if ((data.userTypeId !== 1) && (data.userTypeId !== 2))
            // {
            //     // this.toast.error("Please login to mobile application", "Access Denied");
            //     return;
            // }
            
            // UtilityService.setMultiLocalStorage([
            //     ['name', data.firstName + ' ' + data.lastName],
            //     ['token', data.token],
            //     ['id', data.userId],
            //     ['image', data.profilePicture],
            //     ['type', data.userTypeId]
            // ]);
            // if (data.userTypeId === 1) {
            //     this.router.navigate(['/']);
            // } else {
            //     this.router.navigate(['/tickets']);
            // }
        });


        // this.router.navigate(['/profile']);
    }

    openForgotPasswordPage() {
        this.router.navigate(['/auth/forgot-password']);
    }
}
