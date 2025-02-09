import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';
@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrl: './typing.component.css'
})
export class TypingComponent {
 randomtext:string =faker.lorem.sentences();
 
 Fvalue:string="";
 resulte:boolean=false;
 
 checkword(value:string)
 {
  this.Fvalue=value
 }
 compare(item:string,inputChar:string)
 {
  if(!inputChar)
  {
    return 'pending'
  }
  return (item=== inputChar) ?'correct' :'incorrect'
      
 }
}
