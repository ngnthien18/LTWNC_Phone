import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DuLieuService } from '../dulieu.service';
import { ISanpham } from '../isanpham';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-sanphamtheoloai',
  templateUrl: './sanphamtheoloai.component.html',
  styleUrls: ['./sanphamtheoloai.component.css'],
})
export class SanphamtheoloaiComponent {
  constructor(private d: DuLieuService, private route: ActivatedRoute, private cartservice: CartService) {}
  listSanPham: ISanpham[] = [];
  tenLoai: string = '';
  idLoai: number = 0;
  pageNum: number = 1;
  pageSize: number = 3;
  total: number = 0;
  addToCart(product: ISanpham){
    this.cartservice.addToCart(product);
    console.log(this.cartservice.getItems());
    alert('Đã thêm vào giỏ hàng');
  }
  ngOnInit(): void {
    this.idLoai = Number(this.route.snapshot.params['id']);
    this.d.getTenLoaiSanPham(this.idLoai).subscribe((loai) => {
      this.tenLoai = loai[0].tenLoai;
    });
    this.d
      .getSanPhamTheoLoai(this.idLoai, this.pageSize, this.pageNum)
      .subscribe((res) => {
        this.listSanPham = res.body;
        this.total = Number(res.headers.get('X-Total-Count'));
      });
  }
  chuyenDenTrang(p: number) {
    this.pageNum = p;
    this.d
      .getSanPhamTheoLoai(this.idLoai, this.pageSize, this.pageNum)
      .subscribe((res) => {
        this.listSanPham = res.body;
        this.total = Number(res.headers.get('X-Total-Count'));
      });
  }
}
