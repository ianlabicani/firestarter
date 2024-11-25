import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  FormsModule,
  FormControl,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

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

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [Validators.required]);
  loginForm = this.fb.nonNullable.group({
    emial: this.emailFormControl,
    password: this.passwordFormControl,
  });

  onSubmit() {
    // TODO: login user with firebase
    console.log(this.loginForm.getRawValue());
  }
}
