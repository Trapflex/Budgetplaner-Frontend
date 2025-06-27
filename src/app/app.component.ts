import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarClockComponent } from './calendar-clock/calendar-clock.component';
import { MonthlyBudgetComponent } from './monthly-budget/monthly-budget.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalendarClockComponent, MonthlyBudgetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'budget-planner-frontend';
}
