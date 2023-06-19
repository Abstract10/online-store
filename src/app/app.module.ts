import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// materil acompaonent

import {  AppRoutingModule , routingComponent} from './app-routing.module';
import {  AppComponent  } from './app.component';
import {  BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  {  MatSidenavModule }  from '@angular/material/sidenav'
import {   MatGridListModule }    from '@angular/material/grid-list'
import {   MatCardModule }        from '@angular/material/card'
 import {  MatMenuModule }     from '@angular/material/menu'
 import {  MatButtonModule }    from '@angular/material/button' 
 import {  MatIconModule }      from '@angular/material/icon'
 import {  MatExpansionModule } from '@angular/material/expansion'
 import {  MatListModule }     from '@angular/material/list'
 import {  MatToolbarModule }   from '@angular/material/toolbar'
  import {  MatBadgeModule }    from '@angular/material/badge'
 import {  MatSnackBarModule } from '@angular/material/snack-bar';
 import {  MatTableModule } from '@angular/material/table';
 import { MatTreeModule}  from  '@angular/material/tree'
 
 // extrenal module comonent 
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductHeaderComponent } from './pages/home/component/product-header/product-header.component';
import { FiltersComponent } from './pages/home/component/filters/filters.component';
import { ProductBoxComponent } from './pages/home/component/product-box/product-box.component';
import { CartComponent } from './pages/cart/cart.component'

// services
import { CartService } from './services/cart.service';
import { StoreService } from './services/store.service';

import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CartComponent,
    ProductHeaderComponent,
    FiltersComponent,
    ProductBoxComponent,
    routingComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatTableModule,
    MatTreeModule,
    HttpClientModule
  ],
  providers: [CartService,StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
