import { LoginResponse } from '../../theme/interfaces/login-response.interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { HelperService } from '../../theme/services/helper.service';
import { LoginService } from './login.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'ngt-login',
  templateUrl: './login.component.html',
  providers: [LoginService],
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  rememberMe: boolean = true;
  isError: boolean = false;
  errorMessage: string;
  form: FormGroup;
  email: AbstractControl;
  password: AbstractControl;
  submitted: boolean = false;
  isProcessing: boolean;

  constructor(fb: FormBuilder, protected service: LoginService,
    public router: Router, public helperService: HelperService) {
    this.form = fb.group({
      // tslint:disable-next-line:max-line-length
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  ngOnInit(): void {
    if (this.helperService.isUserLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }

  onSubmit(form: any): void {
    this.submitted = true;
    if (this.form.valid) {
      this.isProcessing = true;
      this.service.login(form)
        .subscribe((res: LoginResponse) => {
          this.isProcessing = false;
          const url = this.helperService.getUserDefaultPageUrl();
          this.router.navigate([url]);
        },
        (err) => {
          this.isError = true;
          this.errorMessage = 'Invalid username or passowrd!';
          this.isProcessing = false;
        });
    }
  }
}
