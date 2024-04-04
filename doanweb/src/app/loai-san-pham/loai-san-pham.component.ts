import { Component } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
import { ILoaisp } from '../iloaisp';
@Component({
  selector: 'app-loai-san-pham',
  templateUrl: './loai-san-pham.component.html',
  styleUrls: ['./loai-san-pham.component.css']
})

export class LoaiSanPhamComponent {
  isHovered: boolean[];
  constructor(private d:DuLieuService) { this.isHovered = []; }
  listLoaiSP:ILoaisp[]=[];
  ngOnInit(): void {
    this.d.getListLoaiSP().subscribe( d => this.listLoaiSP = d);
  }

  //isActive = false;
}

