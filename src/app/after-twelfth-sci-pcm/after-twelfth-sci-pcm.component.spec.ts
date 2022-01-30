import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterTwelfthSciPcmComponent } from './after-twelfth-sci-pcm.component';

describe('AfterTwelfthSciPcmComponent', () => {
  let component: AfterTwelfthSciPcmComponent;
  let fixture: ComponentFixture<AfterTwelfthSciPcmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterTwelfthSciPcmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterTwelfthSciPcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
