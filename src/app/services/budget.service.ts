// src/app/services/budget.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Optional: environments
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private apiUrl = environment.apiUrl; // z.B. 'http://127.0.0.1:8000/api'

  constructor(private http: HttpClient) {}

  getBudgets(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/budgets/`);
  }

  // Weitere Methoden (postBudget, updateBudget, deleteBudget etc.)
}
