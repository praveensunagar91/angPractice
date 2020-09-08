import { User } from "./user";
import { Action } from "@ngrx/store";
import * as userAction from "./action";

const initial={
  user:[
    new User('maxwell','australia'),
    new User('sachin','india')
  ]
};


export function userReducer(state=initial,action:userAction.Adduseraction){

  switch(action.type){

    case userAction.addUser:
       return{
          ...state,
          user:[...state.user,action.payload]
       };
     default:
       return state;
  }


}
