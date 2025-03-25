// src/app/components/dashboard/dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Für *ngFor, *ngIf etc.
import { BudgetService } from '../services/budget.service';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [CommonModule]
})
export class DashboardComponent implements OnInit {
  budgets: any[] = [];

  constructor(private budgetService: BudgetService) {}

  ngOnInit(): void {
    this.budgetService.getBudgets().subscribe({
      next: (data) => (this.budgets = data),
      error: (err) => console.error('Fehler beim Laden der Budgets', err)
    });
  }
}
