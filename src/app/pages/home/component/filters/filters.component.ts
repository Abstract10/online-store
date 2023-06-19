import { Component, EventEmitter, OnDestroy, OnInit,Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styles: [
  ]
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() showCatergory = new EventEmitter<string>();
  categoriesSubscription : Subscription | undefined;
  categories : Array<string> | undefined;
  constructor(private  storeServices : StoreService) { }
  

  ngOnInit(): void {

    this.categoriesSubscription = this.storeServices.getAllCatergories()
    .subscribe((response)=>{
       this.categories = response;
    });
  }



  onShowCategory(category: string): void {
 this.showCatergory.emit(category)
  }

  ngOnDestroy(): void {
    if (this.categoriesSubscription){
      this.categoriesSubscription.unsubscribe();
    }
  } 



 
}

function output(): (target: FiltersComponent, propertyKey: "categories") => void {
  throw new Error('Function not implemented.');
}


