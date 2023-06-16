import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItems }  from '../model/cart.model'
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items :[]});

  constructor( private _snackBar : MatSnackBar) { }

  addToCart( item : CartItems) : void {
     const items = [...this.cart.value.items];

     const cartInItems = items.find((_item)=> _item.id === item.id);

      if ( cartInItems){
        cartInItems.quantity += 1;
      }

      else{
        items.push(item)
      }

  // now emit the emit observe here behaviourSubjecet
   this.cart.next({items});
   // use of snackbar 
   this._snackBar.open('1 Items is Added', 'ok',{ duration :3000});
    console.log(this.cart.value);

  }

  removequantity(item : CartItems) : void {
     
    let itemRemoval : CartItems | undefined ;
    let filteredItems = this.cart.value.items.map((_item)=>{
      if (_item.id === item.id){
      _item.quantity--;
    
      // if item qunatity reaches to zero then update
     if(_item.quantity === 0){
        itemRemoval = _item;
     }
    }
    return _item;
    });
     if (itemRemoval){
     filteredItems= this.removeFromCart(itemRemoval,false);
     }

     this.cart.next({items : filteredItems})
     this._snackBar.open('1 item removed from cart','ok', { duration : 3000})

      

  }

  

  getTotal(items : Array<CartItems>): number{
    return items
    .map((item) => item.price * item.quantity ) 
    .reduce( (prev,curr) => prev+curr,0 )
  }
  ClearCart(): void{
     this.cart.next({items:[]});
     this._snackBar.open('cart is cleared','ok',{duration :3000});
  } 

  removeFromCart(item : CartItems, update = true ){
     const  fliterItems=this.cart.value.items.filter((_item)=>
     _item.id !== item.id);

     if (update){
     this.cart.next({ items: fliterItems})
     this._snackBar.open('1 items Removed Cart','ok',{duration :3000});     

    }

     return fliterItems;
}

}

