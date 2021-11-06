import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks:Task[] =[];
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>{
      this.tasks=tasks;
    });
  }
  deleteTask(task:Task){
    this.taskService.deleteTask(task)
    .subscribe(()=>(
      //once we notyfied that the task deleted we have to update the ui
      //so filter the tasks ,return all tasks where its id not equal the id of the task we deleted
      this.tasks=this.tasks.filter((t)=>
       t.id !== task.id
    )
    ))
  }
  toggleReminder(task:Task){
  task.reminder=!task.reminder;
  this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task:Task){
   this.taskService.addTask(task).subscribe((task)=>
     this.tasks.push(task)
   )
  }

}
