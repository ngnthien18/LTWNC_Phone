import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanphamtheoloaiComponent } from './sanphamtheoloai.component';

describe('SanphamtheoloaiComponent', () => {
  let component: SanphamtheoloaiComponent;
  let fixture: ComponentFixture<SanphamtheoloaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SanphamtheoloaiComponent]
    });
    fixture = TestBed.createComponent(SanphamtheoloaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
