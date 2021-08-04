import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from '../app/components/landing-page/landing-page.component';
import { CityComponent } from '../app/components/city/city.component';
import { EffectsModule } from '@ngrx/effects';
import { LandingPageEffects } from './effects/landing-page.effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { landingPageReducer } from '../app/reducers';
import { DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AppComponent, LandingPageComponent, CityComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EffectsModule.forFeature([]),
    EffectsModule.forRoot([LandingPageEffects]),
    StoreModule.forRoot(landingPageReducer),
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
