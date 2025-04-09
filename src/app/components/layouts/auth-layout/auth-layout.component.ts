import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageFooterComponent } from '@components/page-footer/page-footer.component';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet, PageFooterComponent],
  templateUrl: './auth-layout.component.html',
})
export class AuthLayoutComponent {}
