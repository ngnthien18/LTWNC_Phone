import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiohangTongComponent } from './giohang-tong.component';

describe('GiohangTongComponent', () => {
  let component: GiohangTongComponent;
  let fixture: ComponentFixture<GiohangTongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiohangTongComponent]
    });
    fixture = TestBed.createComponent(GiohangTongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
