import { CartService } from './../cart.service';
import { Component } from '@angular/core';
import { ICart } from '../icart';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private cartService:CartService){}
  items=this.cartService.getItems();
  tongtien(){
    let tt:number=0;
    this.items.forEach(items=>tt+=items.soluong*items.giasp);
    return tt;
  }
  tongsoluong()
  {
    let tsl:number=0;
    this.items.forEach(items=> tsl +=items.soluong);
    return tsl;
  }
  removeFromCart(item: ICart): void {
    this.cartService.removeFromCart(item);
  }
  
}
