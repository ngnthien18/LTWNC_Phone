import { Component } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
import { ISanpham } from '../isanpham';
import { CartService } from './../cart.service';
@Component({
  selector: 'app-san-pham-moi',
  templateUrl: './san-pham-moi.component.html',
  styleUrls: ['./san-pham-moi.component.css']
})
export class SanPhamMoiComponent {
  constructor(private d:DuLieuService,private cartService:CartService) { }
  listSanPham:ISanpham[]=[];
  addToCart(product: ISanpham){
    this.cartService.addToCart(product)
    console.log(this.cartService.getItems());
    alert('Đã thêm vào giỏ hàng');
  }
  ngOnInit(): void {
    this.d.getDienThoaiMoi().subscribe( d => this.listSanPham = d);
  }

}
