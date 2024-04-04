import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
import { ISanpham } from '../isanpham';
import { SimpleChanges} from '@angular/core';
@Component({
  selector: 'app-san-pham-lien-quan',
  templateUrl: './san-pham-lien-quan.component.html',
  styleUrls: ['./san-pham-lien-quan.component.css']
})
export class SanPhamLienQuanComponent {
  @Input() idLoai:number =0; 
  @Input() soSP:number =0;
  listSanPham:ISanpham[]=[];
  
  constructor( private d:DuLieuService  ) {}
  ngOnInit(): void { };
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);  
    this.d.getSanPhamLienQuan(this.idLoai, this.soSP).subscribe(
      data => { this.listSanPham= data; console.log(data); }
    );
  }
}
