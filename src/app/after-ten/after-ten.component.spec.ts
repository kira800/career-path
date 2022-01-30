import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterTenComponent } from './after-ten.component';

describe('AfterTenComponent', () => {
  let component: AfterTenComponent;
  let fixture: ComponentFixture<AfterTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterTenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
