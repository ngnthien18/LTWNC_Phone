// import { Idonhangchitiet } from './../idonhangchitiet';
// import { Idonhang } from './../idonhang';
// import { Component } from '@angular/core';
// import { DuLieuService } from '../dulieu.service';
// @Component({
//   selector: 'app-donhang',
//   templateUrl: './donhang.component.html',
//   styleUrls: ['./donhang.component.css']
// })
// export class DonhangComponent {
//   constructor(private d:DuLieuService) { }
//   listDonHang:Idonhang[] = [];
//   listDonHangCT:Idonhangchitiet[] = [];
//   ngOnInit(): void {
//     this.d.getDonHang().subscribe(d => this.listDonHang= d.body);
//     this.d.getDonHangChiTiet().subscribe(d => this.listDonHangCT= d.body);
//   }
// }
import { Component } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
import { Idonhang } from '../idonhang';
import { Idonhangchitiet } from '../idonhangchitiet';

@Component({
  selector: 'app-donhang',
  templateUrl: './donhang.component.html',
  styleUrls: ['./donhang.component.css']
})
export class DonhangComponent {
  constructor(private d: DuLieuService) { }

  listDonHang: Idonhang[] = [];
  selectedDonHang: Idonhang | null = null;
  listDonHangCT: Idonhangchitiet[] = [];

  ngOnInit(): void {
    this.d.getDonHang().subscribe(d => this.listDonHang = d.body);
  }

  loadDonHangChiTiet(iddh: number): void {
    this.d.getDonHangChiTiet(iddh).subscribe(res => {
      this.listDonHangCT = res;
      // Tính tổng tiền của hóa đơn
      let tongtien = 0;
      for (let item of this.listDonHangCT) {
        tongtien += item.giasp * item.soluong;
      }

      // Gán tổng tiền vào trường tongtien của hóa đơn (nếu selectedDonHang không null)
    if (this.selectedDonHang) {
      this.selectedDonHang.tongtien = tongtien;
    }
    });
  }

  onSelectDonHang(donhang: Idonhang): void {
    this.selectedDonHang = donhang;
    this.loadDonHangChiTiet(donhang.id);
  }
}
