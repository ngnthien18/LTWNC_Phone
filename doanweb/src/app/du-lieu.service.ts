import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ISanpham } from './isanpham';
import { ILoaisp } from './iloaisp';
import { Observable, map } from 'rxjs';
import { Idonhangchitiet } from './idonhangchitiet';
@Injectable({providedIn: 'root'})
export class DuLieuService {
  private apiUrl = 'http://localhost:4000';
  constructor(private h: HttpClient) { }
  laySP(id:number=0){
    return this.h.get(`http://localhost:4000/sanpham/${id}`);
  }
  getLaptopBanChay(){
    var url='http://localhost:4000/sanpham?idLoai=2&_sort=solanxem&_order=desc&_limit=6'; //loại sort ,số lần xem giảm dần, limit là lấy bao nhiêu cái vd:6
    return this.h.get<ISanpham[]>( url );
  }
  getDienThoaiMoi(){
    var url = 'http://localhost:4000/sanpham?idLoai=1&_sort=_ngay&order=desc&_limit=6';
    return this.h.get<ISanpham[]>( url );
  }
  //danh sách loại bên phải body
  getListLoaiSP(){
    var url='http://localhost:4000/loaisp';
    return this.h.get<ILoaisp[]>( url );
  }
  //lấy sản phẩm theo loại
  getSanPhamTheoLoai(idLoai:Number=0 ,pageSize:number=1, pageNum:number=1) { 
    var url = `http://localhost:4000/sanpham?idLoai=${idLoai}&_sort=ngay&order=desc`;
    url+= `&_page=${pageNum}&_limit=${pageSize}`;
    return this.h.get<any>(url , {observe: 'response'} );
}
//lấy tên sp theo loại
  getTenLoaiSanPham(idLoai:Number=0){
    var url = `http://localhost:4000/loaisp?id=${idLoai}`;
    return this.h.get<ILoaisp[]>(url);
}
//chi tiết sp
getSanPhamChiTiet(idSP:Number=0){
  var url = `http://localhost:4000/sanpham?id=${idSP}`;
  return this.h.get<ISanpham[]>(url);
}
//san phẩm liên quan
getSanPhamLienQuan(idLoai:number=0, soSP:number=0){
  var url = `http://localhost:4000/sanpham?idLoai=${idLoai}&_limit=${soSP}`;
  return this.h.get<ISanpham[]>(url);
}
getSanPham(pageSize:number=1, pageNum:number=1)
{ var url = 'http://localhost:4000/sanpham?';
url+= `&_page=${pageNum}&_limit=${pageSize}&_sort=ngay&_order=desc`;
return this.h.get<any>(url , {observe: 'response'} );
}
themSanPham(sp:any){
  return this.h.post('http://localhost:4000/sanpham',sp);
}
xoaSanPham(id:number){
  return this.h.delete('http://localhost:4000/sanpham/'+ id)
}
suaSanPham(sp:any): Observable<any>{
  return this.h.put('http://localhost:4000/sanpham/' + sp.id ,sp);
}
getDonHang(): Observable<any>{
  var url='http://localhost:4000/donhang?';
  return this.h.get<any>(url, { observe: 'response' });
}
getDonHangChiTiet(iddh: number): Observable<Idonhangchitiet[]> {
  var url = `${this.apiUrl}/donhangchitiet?iddh=${iddh}`;
  return this.h.get<Idonhangchitiet[]>(url, { observe: 'response' }).pipe(
    map((response: HttpResponse<Idonhangchitiet[]>) => {
      return response.body ?? [];
    })
  );
}
}

