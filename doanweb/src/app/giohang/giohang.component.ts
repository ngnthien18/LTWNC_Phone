import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-giohang',
  templateUrl: './giohang.component.html',
  styleUrls: ['./giohang.component.css']
})
export class GiohangComponent {
  @Input() tongSL:number =0; 
  @Input() tongTienGH:number =0;
}
