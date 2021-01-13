import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
// @Input() public names:string;

@Output() event:EventEmitter<string>= new EventEmitter();

 public names:string="GLENN MAXWELL";
  constructor() { }

  ngOnInit(): void {
  }


  onSend(){
    this.event.emit(this.names);
  }
}
