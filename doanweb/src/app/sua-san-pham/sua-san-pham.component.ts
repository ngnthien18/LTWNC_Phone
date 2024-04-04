import { Component, OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
import { Input } from '@angular/core';
import { ISanpham } from '../isanpham';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-sua-san-pham',
  templateUrl: './sua-san-pham.component.html',
  styleUrls: ['./sua-san-pham.component.css']
})
export class SuaSanPhamComponent implements OnInit {
  
  constructor(private d:DuLieuService, private route:ActivatedRoute,private router:Router ) { }
  spChiTiet:ISanpham={
    id:0, tensp:"", giasp:0, 
    solanxem:0, hinh:"", 
    mota:"", hot:0, ngay:"", idLoai:0
  }; 
  idSP:number=0;  
  idLoai:number=0;
  tenLoai:string="";
  ngOnInit(): void {
    this.idSP = Number(this.route.snapshot.params['id']);    
    this.d.getSanPhamChiTiet(this.idSP).subscribe ( 
      res => { 
        this.spChiTiet  = res[0];
        this.idLoai = this.spChiTiet.idLoai;
        this.d.getTenLoaiSanPham(this.idLoai).subscribe(
          d => this.tenLoai = d[0]['tenLoai']
        );
      }//res
      );
  }
  @Input() sp:any;
  spSua(sp:any){
    sp.id=this.idSP;
    var tensp= sp.tensp;
    var giasp= sp.giasp;
    var hinh=sp.hinh;
    var mota=sp.mota;
    var idLoai=sp.idLoai;
    var ngay=sp.ngay;
    console.log(sp.id)
    this.d.suaSanPham(sp).subscribe ( data => { 
      alert('Sửa thành công');
      console.log("Sửa",data);
    });
    this.router.navigateByUrl('/admin')
  }
}