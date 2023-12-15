import { User } from '../services/user-list.service';

export class Auth {
  user: User;
  logged: boolean = false;
  token: string = '';
  errorMessage: string = '';

  constructor(user?: User, logged: boolean = false, token: string = '') {
    this.user = user ?? new User('');
    this.logged = logged;
    this.token = token;
  }
}
