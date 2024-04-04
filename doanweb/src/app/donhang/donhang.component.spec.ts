import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonhangComponent } from './donhang.component';

describe('DonhangComponent', () => {
  let component: DonhangComponent;
  let fixture: ComponentFixture<DonhangComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonhangComponent]
    });
    fixture = TestBed.createComponent(DonhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
