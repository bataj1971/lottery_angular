import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Auth } from '../../../store/Auth';
import { authLogout } from '../../../store/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  projectLoaded: boolean = true;
  navbarMenuOpen: boolean = false;
  userName: string = 'JohnDoe';
  userLogged = true;

  auth$: Observable<Auth>;
  auth: Auth = new Auth();
  authSubscription: Subscription;

  constructor(private store: Store<{ auth: Auth }>, private router: Router) {
    this.auth$ = this.store.select('auth');
    this.authSubscription = this.auth$.subscribe(
      (auth: Auth) => (this.auth = auth)
    );
  }

  ngOnInit(): void {}

  toggleNavbarMenu() {
    this.navbarMenuOpen = !this.navbarMenuOpen;
  }

  logout() {
    if (!confirm('Confirm logout')) return;
    this.store.dispatch(authLogout());
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}
