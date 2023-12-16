import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { StoreModule } from '@ngrx/store';

import { userListReducer } from '../store/userList.reducer';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          userList: userListReducer,
        }),
      ],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('::auth method should be callable', () => {
    expect(service.auth({ userName: '', password: '' })).toBeTruthy();
  });

});
