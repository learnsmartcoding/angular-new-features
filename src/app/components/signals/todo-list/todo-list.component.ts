import { CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  tasks = signal<string[]>([]);
  newTask: string = '';
  showDetails = signal(false);

  constructor() {
    // Effect to log tasks whenever the list changes
    effect(() => {
      console.log('Tasks updated:', this.tasks());
    });
  
    // Effect to log when the details view is toggled
    effect(() => {
      console.log('Show details toggled:', this.showDetails());
    });
  }
  
  addTask() {
    if (this.newTask.trim() !== '') {
      const updatedTasks = [...this.tasks(), this.newTask.trim()];
      this.tasks.set(updatedTasks);
      this.newTask = '';
    }
  }

  removeTask(task: string) {
    const updatedTasks = this.tasks().filter(t => t !== task);
    this.tasks.set(updatedTasks);
  }

  toggleDetails() {
    this.showDetails.update(show => !show);
  }
}
