import { GoogleLogin, Logout, PasswordLogin } from '@actions/*';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppStore, User } from '@models/*';
import { select, Store } from '@ngrx/store';
import { selectStateUser } from '@selectors/*';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user$: Observable<User>;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private state: Store<AppStore>,
    public snackBar: MatSnackBar,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.user$ = this.state.pipe(select(selectStateUser));
    this.state.pipe(select(state => state.currentClient.error)).subscribe(
      (error: string) => this.getErrorMessage(error)
      );
  }
  onSubmit(): void {
    this.state.dispatch(new PasswordLogin(this.loginForm.value));
  }

  googleLogin(): void {
    this.state.dispatch(new GoogleLogin());
  }

  getErrorMessage(error: string): void {
    if (error) {
      this.snackBar.open(error, 'Undo', {
        duration: 10000
      });
    }
  }
  getErrorMessageInput(input): string | null {
    if (this.loginForm.getError('required', [input])) { return 'You must enter a value'; }
    if (this.loginForm.getError('email', [input])) { return 'Not a valid email'; }
    if (this.loginForm.getError('minlength', [input])) {
      const { actualLength, requiredLength} = this.loginForm.get(input).errors.minlength;
      return `Min length is ${requiredLength}, you enter ${actualLength}`;
    }
    return null;
  }

}
