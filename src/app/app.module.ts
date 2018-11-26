import { StatusesEffects } from './store/effects/statuses.effects';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/effects/app.effects';
import { ServiceEffects } from './store/effects/service.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';

import { OrdersEffects } from './store/effects/orders.effects';
import { CustomersEffects } from './store/effects/customers.effects';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { AuthEffects } from './store/effects/user.effects';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BusinessEffects } from './store/effects/business.effects';

@NgModule({
  declarations: [AppComponent, LoginComponent],
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
      BusinessEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
