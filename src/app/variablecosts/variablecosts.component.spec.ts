import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablecostsComponent } from './variablecosts.component';

describe('VariablecostsComponent', () => {
  let component: VariablecostsComponent;
  let fixture: ComponentFixture<VariablecostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VariablecostsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariablecostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
