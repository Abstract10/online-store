import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: "./product-box.component.html",
  styles: [
  ]
})
export class ProductBoxComponent implements OnInit {
 @Input() fullWidthMode = false;
 
 @Input() product : Product | undefined  ;
  
 @Output() addTocart = new EventEmitter();
 

  constructor() { }

  ngOnInit(): void {
  }
  onAddToCart(): void{
    this.addTocart.emit(this.product);
  }
}
