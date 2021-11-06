import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/models/Task';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
@Output() onAddTask:EventEmitter<Task>=new EventEmitter();
  text!:string;
  day!:string;
  reminder:boolean=false;
  showAddTask!:boolean;
  subscription:Subscription;
  constructor(private uiService:UiService) { 
    this.subscription=uiService.onToggle()
    .subscribe((val)=>(this.showAddTask=val))

  }

  ngOnInit(): void {
  }
  onSubmit(){
    if(!this.text){
      alert("please enter text!");
      return;
    }
    const newTask={
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }

    //emmit the new object to the parent to add
    this.onAddTask.emit(newTask);


    // clear the form
    this.text='';
    this.day='';
    this.reminder=false;

  }

}
