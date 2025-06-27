import { Injectable } from '@angular/core';

export interface BudgetEntry {
  description: string;
  amount: number;
  date: string; // ISO date string
}

@Injectable({ providedIn: 'root' })
export class BudgetService {
  private storageKey = 'budgetEntries';

  private load(): Record<string, BudgetEntry[]> {
    return JSON.parse(localStorage.getItem(this.storageKey) || '{}');
  }

  private save(data: Record<string, BudgetEntry[]>): void {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  addEntry(entry: BudgetEntry): void {
    const data = this.load();
    const month = entry.date.slice(0, 7); // YYYY-MM
    if (!data[month]) {
      data[month] = [];
    }
    data[month].push(entry);
    this.save(data);
  }

  getMonths(): string[] {
    return Object.keys(this.load());
  }

  getEntries(month: string): BudgetEntry[] {
    return this.load()[month] || [];
  }
}
