import { Component } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
import { ILoaisp } from '../iloaisp';
@Component({ selector: 'app-loai',
  templateUrl: './loai.component.html',
  styleUrls: ['./loai.component.css']
})
export class LoaiComponent {
  constructor(private d:DuLieuService) { }
  listLoaiSP:ILoaisp[] = [];
  ngOnInit(): void {
    this.d.getListLoaiSP().subscribe( d => this.listLoaiSP = d);
  }
}