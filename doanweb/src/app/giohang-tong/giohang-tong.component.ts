import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-giohang-tong',
  templateUrl: './giohang-tong.component.html',
  styleUrls: ['./giohang-tong.component.css']
})
export class GiohangTongComponent implements OnInit {
  constructor() { }
  @Input() tongSL:number =0; 
  @Input() tongTienGH:number =0;
  ngOnInit(): void { }
}
