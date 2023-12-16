import { createReducer, on } from '@ngrx/store';
import { Auth } from './Auth';
import { authLogin, authLogout } from './auth.actions';

const initialAuth = new Auth();

export const authReducer = createReducer(
  initialAuth,
  on(authLogin, (state, auth: Auth) => {
    console.log('authReducer:on authLogin', state, auth);
    return auth;
  }),

  on(authLogout, (state) => {
    const auth = new Auth();
    console.log('authReducer:on authLogout', state, auth);
    return auth;
  })
);
