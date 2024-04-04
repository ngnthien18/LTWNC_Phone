import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaiComponent } from './loai.component';

describe('LoaiComponent', () => {
  let component: LoaiComponent;
  let fixture: ComponentFixture<LoaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoaiComponent]
    });
    fixture = TestBed.createComponent(LoaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
