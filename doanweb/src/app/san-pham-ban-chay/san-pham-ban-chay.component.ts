import { CartService } from './../cart.service';
import { Component } from '@angular/core';
import { ISanpham } from '../isanpham';
import { DuLieuService } from '../du-lieu.service';

@Component({
  selector: 'app-san-pham-ban-chay',
  templateUrl: './san-pham-ban-chay.component.html',
  styleUrls: ['./san-pham-ban-chay.component.css']
})
export class SanPhamBanChayComponent {
  constructor(private d:DuLieuService,private cartService:CartService) { }
  listSanPham:ISanpham[]=[];
  addToCart(product: ISanpham){
    this.cartService.addToCart(product)
    console.log(this.cartService.getItems());
    alert('Đã thêm vào giỏ hàng');
  }
  ngOnInit(): void {
    this.d.getLaptopBanChay().subscribe(d => this.listSanPham= d);// lấy dữ liệu bỏ vào d, d lấy bỏ vào list sp
  }

}
