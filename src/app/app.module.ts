import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainFrameComponent } from './components/main-frame/main-frame.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { StoreModule } from '@ngrx/store';
import { NgxPaginationModule } from 'ngx-pagination';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { NotificationComponent } from './components/notification/notification.component';
import {ReactiveFormsModule} from '@angular/forms';
import { LandingComponent } from './components/landing/landing.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {BookingSystemModule} from "./bookingSystemComponents/booking-system.module";

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    MainFrameComponent,
    ShoppingCartComponent,
    NotificationComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    NgxPaginationModule,
    StoreModule.forRoot({}),
    MatCarouselModule.forRoot(),
    ReactiveFormsModule,
    MatSnackBarModule,
    BookingSystemModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
