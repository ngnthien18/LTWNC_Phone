import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanPhamMoiComponent } from './san-pham-moi.component';

describe('SanPhamMoiComponent', () => {
  let component: SanPhamMoiComponent;
  let fixture: ComponentFixture<SanPhamMoiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SanPhamMoiComponent]
    });
    fixture = TestBed.createComponent(SanPhamMoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
