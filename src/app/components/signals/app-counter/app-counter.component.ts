import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-app-counter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app-counter.component.html',
  styleUrl: './app-counter.component.css'
})
export class AppCounterComponent {
  count = signal(0);
  color = computed(() => this.countColor(this.count()));
  showDetails = signal(false);

  constructor() {
    // Effect to log the count value whenever it changes
    effect(() => {
      console.log('Count changed to:', this.count());
    });

    // Effect to perform an action based on the count value
    effect(() => {
      const currentCount = this.count();
      if (currentCount > 5) {
        console.warn('Count is greater than 5!');
      } else if (currentCount < -5) {
        console.warn('Count is less than -5!');
      }
    });
  }
  
  toggleDetails() {
    this.showDetails.update(show => !show);
  }

  increment() {
    this.count.update(value => value + 1);
  }

  decrement() {
    this.count.update(value => value - 1);
  }

  countColor(count: number): string {
    if (count > 2) return 'green';
    if (count < 0) return 'red';
    return 'black';
  }
}
