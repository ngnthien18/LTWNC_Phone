import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietsanphamComponent } from './chitietsanpham.component';

describe('ChitietsanphamComponent', () => {
  let component: ChitietsanphamComponent;
  let fixture: ComponentFixture<ChitietsanphamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChitietsanphamComponent]
    });
    fixture = TestBed.createComponent(ChitietsanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
