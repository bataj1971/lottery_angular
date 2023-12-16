import { createAction, props } from '@ngrx/store';
import { Auth } from './Auth';

export interface LoginCredentials {
  userName: string;
  password: string;
}

export const authLogin = createAction('[auth] AuthLogin', props<Auth>());

export const authLoginWithCredentials = createAction(
  '[auth] authLoginWithCredentials',
  props<LoginCredentials>()
);

export const authLogout = createAction('[auth] AuthLogout');
