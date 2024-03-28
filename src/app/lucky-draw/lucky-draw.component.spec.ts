import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyDrawComponent } from './lucky-draw.component';

describe('LuckyDrawComponent', () => {
  let component: LuckyDrawComponent;
  let fixture: ComponentFixture<LuckyDrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuckyDrawComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LuckyDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
