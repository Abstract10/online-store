import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import  {Cart,CartItems} from './model/cart.model';
import { CartService } from './services/cart.service';



@Component({
  selector: 'app-root',
  // templateUrl:'./app.component.html'
  template:`
  <app-header [cart]= "cart"> </app-header>
  <router-outlet> </router-outlet>`
  ,
  
  styles: []
})
export class AppComponent  implements OnInit{
  
  cart : Cart = { items : [] };
  title ='store';
   constructor(private cartServices : CartService){}
  ngOnInit(): void {
    this.cartServices.cart.subscribe((_cart)=>{;
     this.cart = _cart;
    });
    
  }
}
