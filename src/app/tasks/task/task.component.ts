import { Component, inject, Input } from '@angular/core';
import { Task } from './task.model';
import { DatePipe } from '@angular/common';
import { CardComponent } from "../../shared/card/card.component";
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  private tasksService = inject(TasksService);

  onCompleteTask(): void {
    this.tasksService.removeTask(this.task.id);
  }
}
