import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '@models/*';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordRegister, GetUser } from '@actions/*';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['']
  });

  constructor(
    private state: Store<AppStore>,
    public snackBar: MatSnackBar,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.state.dispatch(new GetUser());
    this.state.select(state => state.user.error).subscribe(
      error => this.getErrorMessage(error)
      );
  }

  onSubmit() {
    this.state.dispatch(new PasswordRegister(this.loginForm.value));
  }

  getErrorMessage(error) {
    if (error) {
      this.snackBar.open(error, 'Undo', {
        duration: 10000
      });
    }
  }
}
