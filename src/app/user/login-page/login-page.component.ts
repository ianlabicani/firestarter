import { Component, inject } from '@angular/core';
import { GoogleSigninDirective } from '../google-signin.directive';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, GoogleSigninDirective],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  afAuth = inject(AngularFireAuth);
}
