import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

type FormType = 'login' | 'signup' | 'reset';

@Component({
  selector: 'app-email-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './email-login.component.html',
  styleUrl: './email-login.component.scss',
})
export class EmailLoginComponent {
  fb = inject(FormBuilder);
  // FormControls
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);
  confirmPassword = new FormControl('', [Validators.required]);
  // FormGroup
  form = this.fb.group({
    email: this.email,
    password: this.password,
    confirmPassword: this.confirmPassword,
  });

  formType: FormType = 'login';

  submitText = 'login';

  get isLogin() {
    return this.formType === 'login';
  }
  get isSignup() {
    return this.formType === 'signup';
  }
  get isReset() {
    return this.formType === 'reset';
  }
  get isPasswordMatch() {
    return this.password.value === this.confirmPassword.value;
  }

  changeType(val: FormType): void {
    this.formType = val;
    const typeToTextMap: { [key in FormType]: string } = {
      login: 'login',
      signup: 'create new account',
      reset: 'reset password',
    };
    this.submitText = typeToTextMap[this.formType];
    this.form.reset();
  }

  onSubmit(): void {
    console.log(this.form.value);
  }
}
