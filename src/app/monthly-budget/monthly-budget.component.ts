import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BudgetService, BudgetEntry } from '../services/budget.service';

@Component({
  selector: 'app-monthly-budget',
  standalone: true,
  templateUrl: './monthly-budget.component.html',
  styleUrls: ['./monthly-budget.component.css'],
  imports: [FormsModule]
})
export class MonthlyBudgetComponent implements OnInit {
  description = '';
  amount = 0;
  date = new Date().toISOString().substring(0, 10);
  selectedMonth = this.date.slice(0, 7);
  months: string[] = [];
  entries: BudgetEntry[] = [];

  constructor(private budgetService: BudgetService) {}

  ngOnInit(): void {
    this.refresh();
  }

  addEntry(): void {
    const entry: BudgetEntry = {
      description: this.description,
      amount: this.amount,
      date: this.date
    };
    this.budgetService.addEntry(entry);
    this.description = '';
    this.amount = 0;
    this.refresh();
  }

  refresh(): void {
    this.months = this.budgetService.getMonths();
    this.entries = this.budgetService.getEntries(this.selectedMonth);
  }
}
