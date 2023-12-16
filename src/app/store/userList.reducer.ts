import { createReducer, on } from '@ngrx/store';
import { User, UserListService } from '../services/user-list.service';
import { addUser, removeUser } from './userList.actions';
import { inject } from '@angular/core';

const userList: User[] = [];

export const userListReducer = createReducer(
  userList,

  on(addUser, (state, user: User) => {
    console.log('userListReducer:on addUser ro', state);
    const newUserList = [...state, user];
    console.log('userListReducer:on addUser newUserList', newUserList);
    return newUserList;
  }),

  on(removeUser, (state, data) => {
    console.log('userListReducer:on authLogout', state, data.userName);
    const newUserList = state.filter((user) => user.userName !== data.userName);
    return newUserList;
  })
);
