import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  faCalendar = faTimes;
  constructor(private taskService : TaskService) { 
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe( (tasks)=>this.tasks =tasks );
  }
  onDelete(id:any){
    this.taskService.deleteTask(id).subscribe(result => this.ngOnInit());
  }
  onToggle(task :Task){
    task.completed =! task.completed;
    this.taskService.updateTaskState(task).subscribe();
  }

}