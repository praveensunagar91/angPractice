import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { User } from '../user';
import {  Observable } from "rxjs";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

user:Observable<{user:User[]}>

  constructor(private store:Store<{userList:{user:User[]}}>) { }

  ngOnInit(): void {

   this.user= this.store.select('userList');
   console.log(this.user);
  }

}
