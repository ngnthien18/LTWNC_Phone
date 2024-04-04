import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-thanh-toan',
  templateUrl: './thanh-toan.component.html',
  styleUrls: ['./thanh-toan.component.css']
})
export class ThanhToanComponent {
  constructor( private cartservice:CartService) {}
  hoten:string ="";
  email:string ="";
  diachi:string ="";
  dienthoai:string ="";
  taodonhang(){
    this.cartservice.taoDonHang(this.hoten,this.diachi,this.dienthoai,this.email).subscribe(
         response => {
           console.log(response); 
           console.log(response.body); //trong body có biến id của order mới chèn
           console.log(response.ok); //biến od=k =true là request ok
           //lấy id của đơn hàng mới + lưu các sản phẩm trong cart lên server
           if (response.ok==false) { 
              alert(response.statusText); //hiện lỗi
           } else {
             let body:any = response.body; let idDH:number = Number(body.id); 
             this.cartservice.items.forEach( 
               item => this.cartservice.luuChiTietDonhang( idDH,  item).subscribe( res => console.log(res))
             )
           }//else
           alert("Thanh toán thành công")
           location.href="/";
         }
     );
    }//taodonhang
}
