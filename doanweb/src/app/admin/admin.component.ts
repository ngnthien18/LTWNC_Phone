import { ISanpham } from '../isanpham';
import { Component } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private d:DuLieuService) { }
  listSP:ISanpham[] = [];
  pageNum:number=1;
  pageSize:number=9;
  total: number = 0;
  ngOnInit(): void {
    this.d.getSanPham(this.pageSize,this.pageNum).subscribe(res =>{
      this.listSP=res.body;
      this.total=Number(res.headers.get('X-Total-Count'))
    });// lấy dữ liệu bỏ vào d, d lấy bỏ vào list sp
  }
  chuyenDenTrang(p: number) {
    this.pageNum = p;
    this.d.getSanPham(this.pageSize, this.pageNum).subscribe((res) => {
      this.listSP = res.body;
      this.total = Number(res.headers.get('X-Total-Count'));
    });
  }
  xoaSP(id:number){
    if (confirm('Bạn có chắc chắn muốn xóa?')==true){
      this.d.xoaSanPham(id).subscribe(data => alert('Xóa thành công'));
      window.location.reload();
    }
}
}
