import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LearnAngular';
  Ftypeshowcard:boolean=false;
  Ftypeshowfaker:boolean=false;
  Ftypeshowpip:boolean=false;
  cardlist=[
    {images:'/assets/images/ar.jpg' ,title:'augemted reality',descript:'Augmented reality is an interactive experience that enhances the real world with computer-generated perceptual information'},
    {images:'/assets/images/vr.jpg' ,title:'Virtual reality',descript:'Virtual reality (VR) is a simulated experience that employs 3D near-eye displays and pose tracking to give the user an imme'},
    {images:'/assets/images/mix.jpg' ,title:'mix reality',descript:'Augmented reality is an interactive experience that enhances the real world with computer-generated perceptual informationMixed reality (MR) is a term used to describe the merging of a real-world environment and a computer-generated one. '},
    {images:'/assets/images/ar.jpg' ,title:'augemted reality',descript:'Augmented reality is an interactive experience that enhances the real world with computer-generated perceptual information'},
    {images:'/assets/images/vr.jpg' ,title:'Virtual reality',descript:'Virtual reality (VR) is a simulated experience that employs 3D near-eye displays and pose tracking to give the user an imme'},
    {images:'/assets/images/mix.jpg' ,title:'mix reality',descript:'Augmented reality is an interactive experience that enhances the real world with computer-generated perceptual informationMixed reality (MR) is a term used to describe the merging of a real-world environment and a computer-generated one. '},
    {images:'/assets/images/ar.jpg' ,title:'augemted reality',descript:'Augmented reality is an interactive experience that enhances the real world with computer-generated perceptual information'},
    {images:'/assets/images/vr.jpg' ,title:'Virtual reality',descript:'Virtual reality (VR) is a simulated experience that employs 3D near-eye displays and pose tracking to give the user an imme'},
    {images:'/assets/images/mix.jpg' ,title:'mix reality',descript:'Augmented reality is an interactive experience that enhances the real world with computer-generated perceptual informationMixed reality (MR) is a term used to describe the merging of a real-world environment and a computer-generated one. '},
   ]
   typeshowcard()
   {
      this.Ftypeshowcard =!this.Ftypeshowcard
   }
   typeshowfaker()
   {
      this.Ftypeshowfaker =!this.Ftypeshowfaker
   }
   typeshowpip()
   {
      this.Ftypeshowpip =!this.Ftypeshowpip
   }
   check(value:boolean)
   {
    return (value ==true ) ? 'red':'green'
   }
}
