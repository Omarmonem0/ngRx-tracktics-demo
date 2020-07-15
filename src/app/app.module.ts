import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TrackticsEffects } from './effects/tracktics.demo.effects';
import * as fromAppState from './reducers/tracktics.demo.reducer';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TrackticsService } from './services/tracktics.service';
import { AuthHandler } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(fromAppState.appStateFeatureKey, fromAppState.reducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: false, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([TrackticsEffects]),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHandler, multi: true },
    TrackticsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
