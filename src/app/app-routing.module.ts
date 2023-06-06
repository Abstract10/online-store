import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserModule } from '@angular/platform-browser';


const routes: Routes = [
  { 
    //default link to home whenever empty string rediredtsted to home  
    path:'', redirectTo:'home', pathMatch:'full'},
   
   
    {path:'home',component: HomeComponent},

 {
  path :'cart',
  component: CartComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: true }),BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 export const routingComponent = [HomeComponent,CartComponent] 
