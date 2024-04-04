import { Component } from '@angular/core';
import { ISanpham } from '../isanpham';
import { ActivatedRoute, Params } from '@angular/router';
import { DuLieuService } from '../du-lieu.service';
import { CartService } from './../cart.service';
@Component({
  selector: 'app-chitietsanpham',
  templateUrl: './chitietsanpham.component.html',
  styleUrls: ['./chitietsanpham.component.css']
})
export class ChitietsanphamComponent {
  constructor(private d: DuLieuService, private route:ActivatedRoute,private cartService:CartService){}
  listSanPham:ISanpham[]=[];
  addToCart(product: ISanpham){
    this.cartService.addToCart(product)
    console.log(this.cartService.getItems());
    alert('Đã thêm vào giỏ hàng');
  }
  spChiTiet:ISanpham={
    id:0, tensp:"", giasp:0, 
    solanxem:0, hinh:"", 
    mota:"", hot:0, ngay:"", idLoai:0
  }; 
  idSP:number=0;  
  idLoai:number=0;
  tenLoai:string="";
  ngOnInit(): void {
   this.route.params.subscribe((params:Params)=>{
    this.idSP = params['id']
    this.d.getSanPhamChiTiet(this.idSP).subscribe ( 
      res => { 
        this.spChiTiet  = res[0];
        this.idLoai = this.spChiTiet.idLoai;
        this.d.getTenLoaiSanPham(this.idLoai).subscribe(
          d => this.tenLoai = d[0]['tenLoai']
        );
        
      }//res
    );
   })
    
  }
}
