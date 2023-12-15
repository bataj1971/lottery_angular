import { Injectable } from '@angular/core';
import { UserListService } from './user-list.service';
import { Auth } from '../store/Auth';
import { LoginCredentials, authLogin } from '../store/auth.actions';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  // userList$

  constructor(
    private userListService: UserListService,
    private store:Store
  )
  { }

  // async auth(userName: string, password: string): Promise<Auth>
  async auth(loginCredentials: LoginCredentials): Promise<Auth>
  {
    console.log('auth try:', loginCredentials);

    const auth = new Auth();

    try {
      const user = await this.userListService.getUser(
        loginCredentials.userName
      );

      console.log('aut user found', user);


      if (user.password === loginCredentials.password) {

        auth.user = user;
        auth.logged = true;
        auth.token = '';
        console.log('successful login');
      } else {

        // just for testing, irl we do not expose the reason
        auth.errorMessage = 'Login failed: password error';
      }
    } catch (error) {
      auth.errorMessage = 'Login failed: ' + error;

    }

    this.store.dispatch(authLogin(auth));

    return auth;
  }
}
