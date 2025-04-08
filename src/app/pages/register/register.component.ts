import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecordModel } from 'pocketbase';
import { RegisterModel } from 'src/app/interfaces/register-model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
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

  register() {
    const registerModel: RegisterModel = {
      email: this.fg.get('email')!.value,
      password: this.fg.get('password')!.value,
      passwordConfirm: this.fg.get('passwordConfirm')!.value,
      userName: this.fg.get('userName')!.value,
    };

    this.authService.register(registerModel)
    .then((res: RecordModel) => {
      if (res['token'] != '') {
        this.router.navigateByUrl('/home');
      }
    });
  }
}
