import { Component } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-pip',
  templateUrl: './pip.component.html',
  styleUrl: './pip.component.css'
})
export class PipComponent {
  fword:string=""
  fdate:string=""
  amount?:number;
  metr:number=0;
  human={
      head:'black',
      gender:'woman',
      eye:'blue'
  }
  Getvalue(value:string)
  {
    this.fword=value
  }
  Getvaluedate(value:string)
  {
    this.fdate=value
  }
  Getvalueamount(value:number)
  {
    this.amount=value;
  }
  Getvaluemetr(value:number)
  {
    this.metr=value;
  }

}
