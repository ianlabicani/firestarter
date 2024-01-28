import { Component, inject } from '@angular/core';
import { GoogleSigninDirective } from '../google-signin.directive';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { EmailLoginComponent } from '../email-login/email-login.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    CommonModule,
    GoogleSigninDirective,
    SharedModule,
    EmailLoginComponent,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  afAuth = inject(AngularFireAuth);
}
