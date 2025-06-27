import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calendar-clock',
  standalone: true,
  templateUrl: './calendar-clock.component.html',
  styleUrls: ['./calendar-clock.component.css'],
  imports: [CommonModule, FormsModule]
})
export class CalendarClockComponent implements OnInit {
  selectedDate = new Date().toISOString().substring(0, 10);
  time = new Date();

  ngOnInit(): void {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }
}
