import { Component } from '@angular/core';

@Component({
  selector: 'app-generate-pass',
  templateUrl: './generate-pass.component.html',
  styleUrl: './generate-pass.component.css'
})
export class GeneratePassComponent {
    CharLetter="asdfghjklqwertyuiopmnbvcxz"
    CharNumber="0123456789"
    CharSymboly="!@#$%^&*()_+|}{"

    allchar=""
    FCountPass:number=0
    FLetter:boolean=false
    FNumber:boolean=false
    FSymboy:boolean=false
    FGenratePass:string=""


    getvalueCountPass(value:number)
    {
      return  this.FCountPass=value;
       
    }
    typeLetter()
    {
      this.FLetter=!this.FLetter
    }
    typeNumber()
    {
      this.FNumber=!this.FNumber
    }
    typeSymboy()
    {
      this.FSymboy=!this.FSymboy
    }

    GenratePass()
    {
      this.FGenratePass=""
      this.allchar=""
     if (this.FLetter)
      this.allchar+=this.CharLetter;
     if (this.FNumber)
      this.allchar+=this.CharNumber;
     if (this.FSymboy)
      this.allchar+=this.CharSymboly;
    

      for(let i=0;i<this.FCountPass;i++)
      {
        const x=Math.floor( Math.random()*this.allchar.length)
        this.FGenratePass += this.allchar[x]
      }
    }
}
