import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Auth } from '../store/Auth';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
  auth$: Observable<Auth>;
  auth: Auth = new Auth();
  authSubscription: Subscription;

  constructor(private store: Store<{ auth: Auth }>, private router: Router) {
    this.auth$ = this.store.select('auth');
    this.authSubscription = this.auth$.subscribe(
      (auth: Auth) => (this.auth = auth)
    );
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ): boolean {

    // TODO: remove this, just for testing
    // return true;

    if (this.auth.logged) {
      return true;
    };
    console.log("Warning: Unauthenticated route access");
    this.router.navigateByUrl('/login');
    return false;

  }
}
