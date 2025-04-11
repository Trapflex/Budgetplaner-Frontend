import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashtrackerComponent } from './cashtracker.component';

describe('CashtrackerComponent', () => {
  let component: CashtrackerComponent;
  let fixture: ComponentFixture<CashtrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashtrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashtrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
