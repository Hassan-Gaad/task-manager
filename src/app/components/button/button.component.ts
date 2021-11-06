import { Component, Input, OnInit , EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
@Input() color:string;
@Input() text:string;

@Output() btnClick =new EventEmitter();
  constructor() {
    this.color="gray";
    this.text="button";
   }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit();
  }

}
