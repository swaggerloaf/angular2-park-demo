// the root component for the app
import { Component } from '@angular/core';

import { PERSONS } from './shared/mock-persons';


// AppComponentRoot class
// metadata via decorator function
@Component({
  selector: 'my-app',
  templateUrl: '/app/park/app.component.html'
})
export class RootAppComponent { 
  // properties
  title: string = 'Due to open soon.';

  // get user and display

  persons = PERSONS;

  // methods

}