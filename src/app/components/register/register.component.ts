import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  Roles: any = ['Admin', 'Author', 'Reader'];
  selectedValue: any;
  isValidFormSubmitted!: boolean;

  unamePattern = '^[a-z0-9_-]{8,15}$';
  pwdPattern = '^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?!.*s).{6,12}$';
  mobnumPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: [
        '',
        [
          Validators.required,

          Validators.minLength(1),
          Validators.maxLength(30),
        ],
      ],
      password: [
        '',
        [
          Validators.required,

          Validators.minLength(6),
          Validators.maxLength(30),
        ],
      ],
      // roles: ['', [Validators.required]],
    });
    this.selectedValue = 'Roles';
  }

  ngOnInit(): void {}

  get formFields() {
    return this.registerForm.controls;
  }

  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }

  get username() {
    return this.registerForm.get('username');
  }

  onSubmit() {
    this.isValidFormSubmitted = false;
    if (this.registerForm.invalid) {
      return;
    }
    this.registerForm.reset();
  }
}
