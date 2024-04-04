import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DuLieuService } from '../du-lieu.service';
import { ISanpham } from '../isanpham';
import { CartService } from './../cart.service';

@Component({
  selector: 'app-danhsachsanpham',
  templateUrl: './danhsachsanpham.component.html',
  styleUrls: ['./danhsachsanpham.component.css']
})
export class DanhsachsanphamComponent implements OnInit{
  tensp:any;
  constructor(private d:DuLieuService,private cartService:CartService) { }
  listSanPham:ISanpham[]=[];
  addToCart(product: ISanpham){
    this.cartService.addToCart(product)
    console.log(this.cartService.getItems());
    alert('Đã thêm vào giỏ hàng');
  }
  pageNum:number=1;
  pageSize:number=9;
  total: number = 0;
  ngOnInit(): void {
    this.d.getSanPham(this.pageSize,this.pageNum).subscribe(res =>{
      this.listSanPham=res.body;
      this.total=Number(res.headers.get('X-Total-Count'))
    });// lấy dữ liệu bỏ vào d, d lấy bỏ vào list sp
  }
  chuyenDenTrang(p: number) {
    this.pageNum = p;
    this.d.getSanPham(this.pageSize, this.pageNum).subscribe((res) => {
      this.listSanPham = res.body;
      this.total = Number(res.headers.get('X-Total-Count'));
    });
  }
  Search(){
    if (this.tensp == ""){
      this.ngOnInit();
    }else{
      this.listSanPham=this.listSanPham.filter(res =>{
        return res.tensp.toLocaleLowerCase().match(this.tensp.toLocaleLowerCase());
      })
    }
  }
  
  }


