import { Component, EventEmitter, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-product-header',
  templateUrl: 'product-header.component.html',
  styles: [
  ]
})
export class ProductHeaderComponent implements OnInit {
@Output() columnsCountChange = new EventEmitter<number>(); 
  sort ='desc';
itemsShowCount =12;

  constructor() { }

  ngOnInit(): void {
  }
 onsortupdate(newsort:string )  :void{
   this.sort =newsort;
 }
 onitemsupdate(count : number):void{
  this.itemsShowCount =count;
 }

 onColumnsUpdated(colsNum : number): void{
  this.columnsCountChange.emit(colsNum);
 }
}
