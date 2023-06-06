import { Component, OnInit } from '@angular/core';
import { Cart, CartItems} from "src/app/model/cart.model"

@Component({
  selector: 'app-cart',
 templateUrl:'./cart.component.html',
//   template:`
//   <p>
//     app work
//  </p> 

// `
  styles: [
  ]
})
export class CartComponent implements OnInit {
  cart : Cart = { items :[{
    product: 'https//via.placeholder.com/150',
    name: 'snicker' ,
    price: 150,
    quantity: 1,
    id:1,

  }]
};
  constructor() { }
  ///   properties for displaying the table 
   dataSource : Array<CartItems> = [];

   displayedColunms : Array<string> =[
    'product',
    'name',
    'price',
    'quantity', 
    'id',
    'action'
   ];
  ngOnInit(): void {
    this.dataSource = this.cart.items
  }

}
