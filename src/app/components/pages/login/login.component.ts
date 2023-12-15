import { NgFor } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User, UserListService } from '../../../services/user-list.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { authLogin, authLogout } from '../../../store/auth.actions';
import { Auth } from '../../../store/Auth';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm!: NgForm;

  userSelectListVisible: boolean = false;
  userListLoaded: boolean = false;
  userList: User[] = [];

  userName: string = '';
  password: string = '';
  errorMessage: string = '';
  userList$: Observable<User[]>;
  auth$: Observable<Auth>;
  auth: Auth = new Auth();
  authSubscription: Subscription;
  userListSubscription: Subscription;

  constructor(
    private userListService: UserListService,
    private authService: AuthService,
    private router: Router,
    private store: Store<{ auth: Auth; userList: User[] }>
  ) {
    // retrieving observables from store:
    this.userList$ = this.store.select('userList');
    this.auth$ = this.store.select('auth');

    this.authSubscription = this.auth$.subscribe((auth: Auth) => {
      this.auth = auth;
    });

    this.userListSubscription = this.userList$.subscribe((userList: User[]) => {
      console.log('Login : userListSubscription', userList);

      this.userList = userList;
    });
  }

  async submitLogin() {
    this.errorMessage = '';

    const auth = await this.authService.auth({
      userName: this.userName,
      password: this.password,
    });

    if (auth.logged) {
      this.router.navigate(['/game']);
    }
  }

  toggleUserSelect() {
    this.userSelectListVisible = !this.userSelectListVisible;
  }

  async selectUserAccount(userName: string) {
    const user = await this.userListService.getUser(userName);

    if (user) {
      this.userName = user.userName;
      this.password = user.password;
      this.toggleUserSelect();
    } else {
      console.error('userName not found');
    }
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
    this.userListSubscription.unsubscribe();
  }
}
