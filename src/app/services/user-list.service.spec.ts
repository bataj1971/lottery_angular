import { TestBed } from '@angular/core/testing';

import { UserListService } from './user-list.service';
import { userListReducer } from '../store/userList.reducer';
import { StoreModule } from '@ngrx/store';

describe('UserListService', () => {
  let service: UserListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          userList: userListReducer,
        }),
      ],
    });
    service = TestBed.inject(UserListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(' getUserList should be an array ', () => {
    expect(service.getUserList()).toBeInstanceOf(Array);
  });
});
