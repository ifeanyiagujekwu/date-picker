import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent { 
  title = 'my-app';
  public date = moment().toObject();
  public n: number = 0;
  
  tomorrow(n: string){
    
    var dayWrapper = moment(this.date);
    var n = dayWrapper.add((this.n++), 'days').toString();
    console.log(n);
    
  }
  yesterday(n: string){
    
    var dayWrapper = moment(this.date);
    var n = dayWrapper.subtract((this.n++), 'days').toString();
    console.log(n);
    
  }
  next_week(n: string){
    
    var dayWrapper = moment(this.date);
    var n = dayWrapper.add((this.n++), 'weeks').toString();
    console.log(n);
    
  }
  last_week(n: string){
    
    var dayWrapper = moment(this.date);
    var n = dayWrapper.subtract((this.n++), 'weeks').toString();
    console.log(n);
    
  }

}
