import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-product-header',
  templateUrl: 'product-header.component.html',
  styles: [
  ]
})
export class ProductHeaderComponent implements OnInit {
@Output() columnsCountChange = new EventEmitter<number>();
@Output() itemsCountChange = new EventEmitter<number>(); 
@Output() sortChange = new EventEmitter<string>();

  sort ='desc';
 itemsShowCount =12;




  constructor() { }

  ngOnInit(): void {
  }


 onsortupdate(newsort:string ):void{
   this.sort =newsort;
   this.sortChange.emit(newsort);
 }


 onitemsupdate(count : number):void{
  this.itemsShowCount =count;
  this.itemsCountChange.emit(count);
 }

 onColumnsUpdated(colsNum : number): void{
  this.columnsCountChange.emit(colsNum);
 }
}
