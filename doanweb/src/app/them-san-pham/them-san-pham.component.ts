import { Component, OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-them-san-pham',
  templateUrl: './them-san-pham.component.html',
  styleUrls: ['./them-san-pham.component.css']
})
export class ThemSanPhamComponent implements OnInit {
  constructor(private d:DuLieuService, private router: Router) { }
  ngOnInit(): void {

  }
  spthem(sp:any){
    var tensp= sp.tensp;
    var giasp= sp.giasp;
    var hinh=sp.hinh;
    var mota=sp.mota;
    var idLoai=sp.idLoai;
    var ngay=sp.ngay;
    this.d.themSanPham(sp).subscribe ( data => alert('Thêm thành công'));
    this.router.navigateByUrl('/admin');
  }
  

}
