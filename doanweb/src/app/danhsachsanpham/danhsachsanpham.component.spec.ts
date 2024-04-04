import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachsanphamComponent } from './danhsachsanpham.component';

describe('DanhsachsanphamComponent', () => {
  let component: DanhsachsanphamComponent;
  let fixture: ComponentFixture<DanhsachsanphamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DanhsachsanphamComponent]
    });
    fixture = TestBed.createComponent(DanhsachsanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});