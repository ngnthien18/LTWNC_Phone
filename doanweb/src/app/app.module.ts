
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { DanhsachsanphamComponent } from './danhsachsanpham/danhsachsanpham.component';
import { ChitietsanphamComponent } from './chitietsanpham/chitietsanpham.component';
import { DangkyComponent } from './dangky/dangky.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { LoiComponent } from './loi/loi.component';
import { GiohangComponent } from './giohang/giohang.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SanPhamBanChayComponent } from './san-pham-ban-chay/san-pham-ban-chay.component';
import { SanPhamMoiComponent } from './san-pham-moi/san-pham-moi.component';
import { LoaiSanPhamComponent } from './loai-san-pham/loai-san-pham.component';
import { SanPhamTheoLoaiComponent } from './san-pham-theo-loai/san-pham-theo-loai.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SanPhamLienQuanComponent } from './san-pham-lien-quan/san-pham-lien-quan.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { ThanhToanComponent } from './thanh-toan/thanh-toan.component';
import { DuLieuService } from './du-lieu.service';
import { AdminComponent } from './admin/admin.component';
import { ThemSanPhamComponent } from './them-san-pham/them-san-pham.component';
import { SuaSanPhamComponent } from './sua-san-pham/sua-san-pham.component';
import { DonhangComponent } from './donhang/donhang.component';
import { AdminModule } from './admin/admin.module';



@NgModule({
  declarations: [
    AppComponent,
    DanhsachsanphamComponent,
    ChitietsanphamComponent,
    DangkyComponent,
    DangnhapComponent,
    TrangchuComponent,
    LienheComponent,
    LoiComponent,
    GiohangComponent,
    SanPhamBanChayComponent,
    SanPhamMoiComponent,
    LoaiSanPhamComponent,
    SanPhamTheoLoaiComponent,
    SanPhamLienQuanComponent,
    CartComponent,
    ThanhToanComponent,
    AdminComponent,
    ThemSanPhamComponent,
    SuaSanPhamComponent,
    DonhangComponent,

 

  ],
  
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,


    ],
providers: [DuLieuService],
bootstrap: [AppComponent]
})
export class AppModule { }