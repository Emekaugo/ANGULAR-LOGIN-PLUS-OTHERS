import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  unamePattern = '^[a-z0-9_-]{8,15}$';
  pwdPattern = '^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?!.*s).{6,12}$';
  mobnumPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

  isValidFormSubmitted!: boolean;

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
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
    });
  }

  ngOnInit(): void {}

  get formFields() {
    return this.loginForm.controls;
  }

  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    this.isValidFormSubmitted = false;
    if (this.loginForm.invalid) {
      return;
    }
    this.loginForm.reset();
  }
}
