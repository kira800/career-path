import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterTwelfthSciComponent } from './after-twelfth-sci.component';

describe('AfterTwelfthSciComponent', () => {
  let component: AfterTwelfthSciComponent;
  let fixture: ComponentFixture<AfterTwelfthSciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterTwelfthSciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterTwelfthSciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
