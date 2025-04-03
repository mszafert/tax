import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageFooterComponent } from '@sharedComponents/page-footer/page-footer.component';

@Component({
  selector: 'app-login-layout',
  imports: [RouterOutlet, PageFooterComponent],
  templateUrl: './login-layout.component.html',
  styleUrl: './login-layout.component.css',
})
export class LoginLayoutComponent {}
