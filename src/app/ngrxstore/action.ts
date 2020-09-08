
import { User } from "./user";
import { Action } from "@ngrx/store";

 export const addUser='USERADD';

export class Adduseraction implements Action{

  readonly type=addUser;

  constructor(public payload:User){}


}
