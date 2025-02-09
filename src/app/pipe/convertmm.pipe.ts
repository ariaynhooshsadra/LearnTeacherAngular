import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertmm'
})
export class ConvertmmPipe implements PipeTransform {

  transform(metr: number, target:string): number  {
  
    if(!metr)
      0;
    switch(target)
    {
      case "dm":
        return metr*10;
      case "cm":
        return metr*100
      case 'mm' :
        return  metr*1000
      case 'µm':
        return  metr*1000000
      case 'nm':
        return metr*1000000000
      default:
         throw new Error("not support unit"+target)  
    }
  }

}
