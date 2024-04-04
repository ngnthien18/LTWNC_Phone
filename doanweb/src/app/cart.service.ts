import { Injectable } from '@angular/core';
import { ISanpham } from './isanpham';
import { ICart } from './icart';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private h:HttpClient) { }
  items: ICart[] = [];
  addToCart(sp: ISanpham) {    
    const index = this.items.findIndex(items => items.idsp === sp.id);
    if (index >= 0) {
      // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng sản phẩm lên 1
      this.items[index].soluong++;
    } else {
      // Nếu sản phẩm chưa có trong giỏ hàng, thêm vào giỏ hàng với số lượng là 1
      const newItem: ICart = {
        idsp: sp.id,
        tensp: sp.tensp,
        giasp: sp.giasp,
        hinh: sp.hinh,
        soluong: 1
      };
      this.items.push(newItem);
    }
  }
  getItems() { return this.items; }
  clearCart() { this.items = []; return this.items;}
  removeFromCart(item: ICart): void {
    const index = this.items.findIndex(i => i.idsp === item.idsp);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
  taoDonHang(hoten:string, diachi:string, dienthoai:string, email:string){
    return this.h.post("http://localhost:4000/donhang",
      {hoten:hoten, diachi:diachi, dienthoai:dienthoai, email:email },
      { observe: 'response' }
    )
}
luuChiTietDonhang(idDH:number, item:ICart){
  return this.h.post<any>(
    "http://localhost:4000/donhangchitiet",
  {"iddh":idDH,"idsp":item.idsp,"tensp":item.tensp,"giasp":item.giasp,"soluong":item.soluong},
    { observe: 'response' }
  )
  } 
}

