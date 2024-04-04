import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanhToanComponent } from './thanh-toan.component';

describe('ThanhToanComponent', () => {
  let component: ThanhToanComponent;
  let fixture: ComponentFixture<ThanhToanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThanhToanComponent]
    });
    fixture = TestBed.createComponent(ThanhToanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
