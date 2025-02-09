import { Component ,Input } from '@angular/core';

@Component({
  selector: 'app-card-dpc',
  templateUrl: './card-dpc.component.html',
  styleUrl: './card-dpc.component.css'
})
export class CardDPCComponent {
  @Input() images:string='';
  @Input() title:string='';
  @Input() descript:string='';
}
