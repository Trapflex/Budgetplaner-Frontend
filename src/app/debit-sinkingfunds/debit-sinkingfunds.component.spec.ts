import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitSinkingfundsComponent } from './debit-sinkingfunds.component';

describe('DebitSinkingfundsComponent', () => {
  let component: DebitSinkingfundsComponent;
  let fixture: ComponentFixture<DebitSinkingfundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebitSinkingfundsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebitSinkingfundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
