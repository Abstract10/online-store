import { Component } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';



@Component({
  selector: 'app-root',
  template:`
  <router-outlet> </router-outlet>
 `,
  
  styles: []
})
export class AppComponent {
  title = 'store';
}
