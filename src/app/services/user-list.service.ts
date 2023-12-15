import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { addUser } from '../store/userList.actions';

@Injectable({
  providedIn: 'root',
})
export class UserListService {
  private userList: User[] = [];

  constructor(private store: Store<{ userList: User[] }>) {

    this.userList.push(new User('egon', 'Samuel Egon'));
    this.userList.push(new User('lili', 'Lilian Abercrombey'));
    this.userList.push(new User('tom', 'Tom Waits'));
    
  }

  initService() {

    // storing userlist into store:
    this.userList.forEach((user: User) => {
      this.store.dispatch(addUser(user));
    });

  }

  getUserList(): User[] {
    return [...this.userList];
  }

  getUser(userName: string): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      setTimeout(() => {
        const user = this.userList.find((user: User) => {
          return user.userName === userName;
        });

        if (user) {
          resolve(user);
        } else {
          reject('username not found');
        }
      }, 300);
    });
  }

  async getPasswordForUser(userName: string): Promise<string> {
    try {
      const user = await this.getUser(userName);
      return user.password;
    } catch (error) {
      throw new Error('Username for password not found:' + userName);
    }
  }
}

export class User {
  userName: string = '';
  password: string = '';
  fullName: string = '';
  email: string = '';

  constructor(userName: string, fullName: string = '', password: string = '') {
    this.userName = userName;
    this.email = this.userName ? this.userName + '@test.com' : '';
    this.fullName = fullName || userName;
    // creating a long fake password, just to avoid the browsers "dangeruous pawwsord" alert:
    this.password = password || userName + 'sadfsf654asfas6fasriolkjrtew64987';
  }
}
