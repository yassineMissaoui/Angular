import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Task } from '../../task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask : EventEmitter<Task> = new EventEmitter();

  userId : number=9999;
  id : number=9999;
  title : string="";
  completed: boolean = false;


  constructor() {}

  ngOnInit(): void {
  }

  

  onSubmit(){
    if(!this.title){
      alert('Please add a task !');
      return;
    }
    const newTask={
      userId:Math.trunc(this.id/20),
      id:this.id,
      title:this.title,
      completed:this.completed
    };


    this.onAddTask.emit(newTask);
    console.log(newTask);

    this.title='';
    this.completed=false;

  }

}
