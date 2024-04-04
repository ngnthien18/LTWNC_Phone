import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { DanhsachsanphamComponent } from './danhsachsanpham/danhsachsanpham.component';
import { ChitietsanphamComponent } from './chitietsanpham/chitietsanpham.component';
import { DangkyComponent } from './dangky/dangky.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { SanPhamMoiComponent } from './san-pham-moi/san-pham-moi.component';
import { SanPhamTheoLoaiComponent } from './san-pham-theo-loai/san-pham-theo-loai.component';
import { CartComponent } from './cart/cart.component';
import { ThanhToanComponent } from './thanh-toan/thanh-toan.component';
import { AdminComponent } from './admin/admin.component';
import { DonhangComponent } from './donhang/donhang.component';
import { ThemSanPhamComponent } from './them-san-pham/them-san-pham.component';
import { SuaSanPhamComponent } from './sua-san-pham/sua-san-pham.component';
const routes: Routes = [
    {path:'',component:TrangchuComponent},
    {path:'trangchu',component:TrangchuComponent},
    {path:'cart',component:CartComponent},
    {path:'thanhtoan',component:ThanhToanComponent},
    {path:'loai/:id',component:SanPhamTheoLoaiComponent},
    {path:'sanpham',component:DanhsachsanphamComponent},
    {path:'sanpham/:id',component:ChitietsanphamComponent},
    {path:'dangky',component:DangkyComponent},
    {path:'admin',component:AdminComponent},
    {path:'dangnhap',component:DangnhapComponent},
    {path:'lienhe',component:LienheComponent},
    {path:'donhang',component:DonhangComponent},
    {path:'edit/:id',component:SuaSanPhamComponent},
    {path:'themsp',component:ThemSanPhamComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }