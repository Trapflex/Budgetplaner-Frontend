import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinkingfundsComponent } from './sinkingfunds.component';

describe('SinkingfundsComponent', () => {
  let component: SinkingfundsComponent;
  let fixture: ComponentFixture<SinkingfundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinkingfundsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinkingfundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
