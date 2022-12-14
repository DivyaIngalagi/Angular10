import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-builtin-pipes';
  firstName:string = "Sachin";
  lastName:string = "Tendulkar";
  city:string="Mumbai";
  currDate:number = Date.now();
  amount:number = 1529.78;
  pi: number = 3.14159265359;
  profitPer:number =  1.798;
  jsonInfo:any = { firstName:'Sachin', lastName:'Tendulkar', salary:50000  }
}
