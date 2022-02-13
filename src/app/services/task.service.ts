import { Injectable } from '@angular/core';
import { Task } from '../task';
import { Observable ,of} from 'rxjs';
import { HttpClient , HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers : new HttpHeaders({
    'Contest-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'
  constructor(private http:HttpClient) {}

  getTasks() : Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }
  
  deleteTask(id:any):Observable<void>{
    return this.http.delete<void>(this.apiUrl+'/'+id); 
  }
  updateTaskState(task:Task):Observable<Task>{
    const url = this.apiUrl+'/'+task.id;
    return this.http.put<Task>(url,task,httpOptions);
  }
}
