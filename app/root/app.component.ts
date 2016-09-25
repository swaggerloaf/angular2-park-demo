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
  
  TITLES: string[] = [
    "It's a UNIX system! I know this!",
    "Hold on to your butts.",
    "All major theme parks have delays.",
    "Remind me to thank John for a lovely weekend.",
    "Then they're expensive, put 'em back."
  ]

    // methods
  randomIntFromInterval = function(min: number,max: number)
  {
      return Math.floor(Math.random()*(max-min+1)+min);
  } 

  title: string = this.TITLES[this.randomIntFromInterval(0, 4)];



}