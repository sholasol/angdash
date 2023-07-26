import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MaterialCssVarsModule, MaterialCssVarsService} from 'angular-material-css-vars';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BodyComponent } from './components/body/body.component';
import { ProductsComponent } from './components/products/products.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { PagesComponent } from './components/pages/pages.component';
import { MediaComponent } from './components/media/media.component';
import { SettingsComponent } from './components/settings/settings.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    BodyComponent,
    ProductsComponent,
    StatisticsComponent,
    CouponsComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialCssVarsModule.forRoot({
      isAutoContrast: true,
      darkThemeClass: 'isDarkTheme',
      lightThemeClass: 'isLightTheme'
    })
  ],
  providers: [MaterialCssVarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
