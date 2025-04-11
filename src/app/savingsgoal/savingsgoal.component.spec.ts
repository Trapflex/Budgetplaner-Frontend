import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsgoalComponent } from './savingsgoal.component';

describe('SavingsgoalComponent', () => {
  let component: SavingsgoalComponent;
  let fixture: ComponentFixture<SavingsgoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavingsgoalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavingsgoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
