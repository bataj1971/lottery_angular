import { Component, OnDestroy } from '@angular/core';
import { Auth } from '../../../store/Auth';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent implements OnDestroy{
  auth$: Observable<Auth>;
  auth: Auth = new Auth();
  authSubscription: Subscription;

  constructor(private store: Store<{ auth: Auth }>) {
    this.auth$ = this.store.select('auth');
    this.authSubscription = this.auth$.subscribe((auth: Auth) => (this.auth = auth));
  }

  logout() {
    alert("logout");
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

}
