import { Component, EventEmitter, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styles: [
  ]
})
export class FiltersComponent implements OnInit {
  @Output() showCatergory = new EventEmitter<string>();

  categories = ['stores', 'sport'];
  constructor() { }

  ngOnInit(): void {
  }
  onShowCategory(category: string): void {
 this.showCatergory.emit(category)
  }
}
function output(): (target: FiltersComponent, propertyKey: "categories") => void {
  throw new Error('Function not implemented.');
}

