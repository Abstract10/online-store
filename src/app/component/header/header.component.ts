import { Component,Input } from '@angular/core';
import { Cart, CartItems } from 'src/app/model/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent  {
  private  _cart : Cart ={ items:[] };
  itemsquantity = 0;
  

 @Input()
 get cart():Cart{
   return this._cart;
 }
 set cart(cart:Cart ){
   this._cart = cart;
     
   this.itemsquantity = cart.items
   .map((item) => item.quantity)
   .reduce((prev,curr) => prev + curr , 0 ); 

 }

 
 
 constructor( private cartServices: CartService) { }
 
 getTotal(items: Array<CartItems>) : number { 
  return this.cartServices.getTotal(items);
}
onClearCart(){
   this.cartServices.ClearCart();
}

}
