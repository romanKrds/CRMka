import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SelectCurrentBusinessComponent } from './components/select-current-business/select-current-business.component';
import { SharedModule } from './shared/shared.module';
import { AppEffects } from './store/effects/app.effects';
import { BusinessEffects } from './store/effects/business.effects';
import { CurrentBusinessEffects } from './store/effects/current-business.effects';
import { CustomersEffects } from './store/effects/customers.effects';
import { OrdersEffects } from './store/effects/orders.effects';
import { ServiceEffects } from './store/effects/service.effects';
import { StatusesEffects } from './store/effects/statuses.effects';
import { AuthEffects } from './store/effects/user.effects';
import { metaReducers, reducers } from './store/reducers';




const PRINT_BREAKPOINTS = [{
  alias: 'xs.print',
  suffix: 'XsPrint',
  mediaQuery: 'print and (max-width: 297px)',
  overlapping: false
}];

@NgModule({
  declarations: [AppComponent, LoginComponent, SelectCurrentBusinessComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([
      AppEffects,
      ServiceEffects,
      StatusesEffects,
      OrdersEffects,
      CustomersEffects,
      AuthEffects,
      BusinessEffects,
      CurrentBusinessEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    SharedModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
