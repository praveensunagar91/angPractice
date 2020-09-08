import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { User } from '../user';
import * as userListAction from "../action";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  constructor(private store:Store<{userList:{user:User[]}}>) { }

  ngOnInit(): void {
  }


  onAdd(data){

    console.log();
    this.store.dispatch(new userListAction.Adduseraction(data));
  }
}
