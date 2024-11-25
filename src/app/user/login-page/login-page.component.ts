import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { FirebaseError } from '@angular/fire/app';

@Component({
  selector: 'app-login-page',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  private fb = inject(FormBuilder);
  auth = inject(Auth);
  private router = inject(Router);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [Validators.required]);
  loginForm = this.fb.nonNullable.group({
    email: this.emailFormControl,
    password: this.passwordFormControl,
  });
  errorMessage = signal<string | null>(null);

  async onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.loginForm.getRawValue();
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email!,
        password!
      );
      if (userCredential.user) {
        this.router.navigate(['/']);
      }
    } catch (error) {
      this.errorMessage.set((error as FirebaseError).code);
    }
  }
}
