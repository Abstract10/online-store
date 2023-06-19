import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { CartService } from 'src/app/services/cart.service';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';


 const ROWS_HEIGHT: {[id:number]:number} ={1:400,3:335,4:350};
@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html'
  
})
export class HomeComponent implements OnInit, OnDestroy {

  category: string | undefined;
  cols=3;
   rowHeight=ROWS_HEIGHT[this.cols];

   product : Array<Product> | undefined;
  productsubscription :Subscription| undefined ;
  sort = "desc";
  count = '12';



  
  constructor( private  cartServices : CartService  , private storeServices:StoreService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
   this.productsubscription = this.storeServices.getAllProducts(this.count , this.sort, this.category)
     .subscribe((_products)=>{
      this.product = _products;
     })
  }


  onColumnCountChange(colsNum: number):void {
    this.cols=colsNum;
    this.rowHeight=ROWS_HEIGHT[this.cols];
  throw new Error('Method not implemented.');

  }
  onShowCatergory(newcatergory: string):void {
    this.category = newcatergory;
    this.getProducts();
  
  }
  onAddToCart( product : Product): void{
     // here i am mapping the product withh the cart services for the 
     //console.log(event)
    this.cartServices.addToCart({
       product: product.image ,
       name: product.title ,
       price:  product.price ,
       quantity: 1 ,
       id:product.id,
     });
 }

 ngOnDestroy(): void {
    if(this.productsubscription){
      this.productsubscription.unsubscribe();
    }
 }

 onItemsCountChange(newCount : number): void {
  this.count = newCount.toString();
  this.getProducts();


 }
 onSortChange(newSort : string ): void{
  this.sort = newSort;
  this.getProducts();
 }
    
  }



