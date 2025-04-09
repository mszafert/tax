import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '@services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './signin.component.html'
})
export class SigninComponent {

  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);

  email: string = '';
  password: string = '';
  displayErrorMessage: boolean = false;

  signIn() {
    this.authService.signIn(this.email, this.password).then((res: boolean) => {
      if (res) {
        this.router.navigateByUrl('/dashboard');
      } else {
        this.displayErrorMessage = true;
      }
    });
  }
}
