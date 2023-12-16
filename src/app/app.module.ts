import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { FooterComponent } from './components/layouts/footer/footer.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { LoginComponent } from './components/pages/login/login.component';
// import { GameComponent } from './components/pages/game/game.component';
// import { NumberPanelComponent } from './components/number-panel/number-panel.component';
// import { NumberComponent } from './components/number-panel/number/number.component';
import { MenuComponent } from './components/layouts/menu/menu.component';
import { HomeComponent } from './components/pages/home/home.component';
import { UserProfileComponent } from './components/pages/user-profile/user-profile.component';
import { authReducer } from './store/auth.reducer';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserListService } from './services/user-list.service';
import { userListReducer } from './store/userList.reducer';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    // removing components, used in GameModule for lazyloading
    // NumberPanelComponent,
    // GameComponent,
    // NumberComponent,
    MenuComponent,
    HomeComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    StoreModule.forRoot({
      auth: authReducer,
      userList: userListReducer,
    }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      // force to load app.service with userdata, dictionary etc before anything would load
      useFactory: (userListService: UserListService) => () => {
        return userListService.initService();
      },
      deps: [UserListService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
