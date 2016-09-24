// the root component for the app
import { Component } from '@angular/core';


// AppComponentRoot class
// metadata via decorator function
@Component({
  selector: 'app-container',
  templateUrl: '/app/root/app.component.html'
})
export class RootAppComponent { 
  // properties
  title: string = 'An Angular 2 App that can grow.';

  // methods

}