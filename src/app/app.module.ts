import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialModule } from '../material/material.module';
import { ClothesComponent } from './components/clothes/clothes.component';
import { ShoesComponent } from './components/shoes/shoes.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainFrameComponent } from './components/main-frame/main-frame.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { HomeComponent } from './components/home/home.component';
import { ItemGridsComponent } from './components/item-grids/item-grids.component';
import { PreviewItemComponent } from './components/preview-item/preview-item.component';
import { StoreModule } from '@ngrx/store';
import { NgxPaginationModule } from 'ngx-pagination';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ItemQuantityComponent } from './components/item-quantity/item-quantity.component';




@NgModule({
  declarations: [
    AppComponent,
    SideNavigationComponent,
    ClothesComponent,
    ShoesComponent,
    TopNavigationComponent,
    MainFrameComponent,
    MainSliderComponent,
    HomeComponent,
    ItemGridsComponent,
    PreviewItemComponent,
    ShoppingCartComponent,
    NotificationComponent,
    ItemQuantityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MaterialModule,
    FlexLayoutModule,
    NgxPaginationModule,
    StoreModule.forRoot({}),
    MatCarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
