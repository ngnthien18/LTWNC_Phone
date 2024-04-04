import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaSanPhamComponent } from './sua-san-pham.component';

describe('SuaSanPhamComponent', () => {
  let component: SuaSanPhamComponent;
  let fixture: ComponentFixture<SuaSanPhamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuaSanPhamComponent]
    });
    fixture = TestBed.createComponent(SuaSanPhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
