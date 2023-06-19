import { Component, OnInit } from '@angular/core';
import { Cart, CartItems} from "src/app/model/cart.model"
import { CartService } from 'src/app/services/cart.service';
// import {MatTableModule} from '@angular/material/table'

@Component({
  selector: 'app-cart',
 templateUrl:'./cart.component.html',
//   template:`
//   <p>
//     app work
//  </p> 

// `
  styles: [
  ],
  // standalone: true,
  // imports: [MatTableModule],
})
export class CartComponent implements OnInit {

  dataSource : CartItems[] = [];
  cart : Cart = { items : [{
    product:'https//via.placeholder.com/150',
    name: 'snicker',
    price: 150,
    quantity: 1,
    id:1,
  },
  {
    product:'https//via.placeholder.com/150',
    name: 'snicker',
    price: 150,
    quantity: 4,
    id:2,
  }
]
};
  constructor(private cartServices : CartService) { }
  ///   properties for displaying the table 
   

  displayedColumns : Array<string> =[
    'product',
    'name',
     'price',
     'quantity', 
      'total',
     'action',
   ];

   
  ngOnInit(): void {
    this.dataSource = this.cart.items
    this.cartServices.cart.subscribe(( _cart : Cart) => {
        this.cart = _cart;
        this.dataSource= this.cart.items;
    });
  }

  getTotal(items: Array<CartItems>) : number { 
    return this.cartServices.getTotal(items);
  }

  onClearCart() : void {
   this.cartServices.ClearCart();
   
  }
  onRemoveFromCart(item  : CartItems){
  this.cartServices.removeFromCart(item);
  }
  onAddQuantity(item :CartItems){
     this.cartServices.addToCart(item);

  }
  onRemoveQuantity(item : CartItems){
    this.cartServices.removequantity(item);

  }
  
}
