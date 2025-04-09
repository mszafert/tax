import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecordModel } from 'pocketbase';
import { SignupModel } from '@interfaces/signup-model';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
  authService = inject(AuthService);
  router: Router = inject(Router);
  fb: FormBuilder = inject(FormBuilder);

  fg!: FormGroup;

  ngOnInit(): void {
    this.fg = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordConfirm: ['', [Validators.required, Validators.minLength(8)]],
      userName: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  signup() {
    const signupModel: SignupModel = {
      email: this.fg.get('email')!.value,
      password: this.fg.get('password')!.value,
      passwordConfirm: this.fg.get('passwordConfirm')!.value,
      userName: this.fg.get('userName')!.value,
    };

    this.authService.signup(signupModel)
    .then((res: RecordModel) => {
      if (res['token'] != '') {
        this.router.navigateByUrl('/home');
      }
    });
  }
}
