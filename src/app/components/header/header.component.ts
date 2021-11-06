import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = 'task-manager';
  showAddTask!:boolean;
  subscription!:Subscription;
  
  constructor(private uiService:UiService,private router:Router) {
    this.subscription=uiService.onToggle()
    .subscribe((val)=>(this.showAddTask=val))
   }

  ngOnInit(): void {
  }
  toggleAddTask(){
   this.uiService.toggleAddTask();
  }

  hasRouter(route:string){
    //if we are now in the about page then thats means the url will be /about else it will be / wich means that we are in home
    //so if it was / then it will return true 
    return this.router.url===route;
  }
}
