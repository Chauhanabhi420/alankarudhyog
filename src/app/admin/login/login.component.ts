import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
// import { HeaderComponent } from '../../dashboard/header/header.component';

import { AuthenticationService } from '../../services';
import { AppService } from '../../services/app.service';

@Component({selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css'] })
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error: string;
LC : any;
currentUser: any;
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private appService: AppService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/dashboard']);
        }
    }
    model: User = new User();
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            rememberMe: new FormControl(false)
        });


        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // onSubmit() {
    //   console.log(this.model)
    //   if(loginForm.valid) {
    //     this.appService.setUserLoggedIn(true)
    //     this.router.navigate(['/login']);
    //   }
    // }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        console.log(this.model)

        this.appService.setUserLoggedIn(true)


        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigateByUrl('/dashboard');
                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
    }
}
export class User {

  constructor(

  ) {  }

  public userName: string;
  public password: string;

}
