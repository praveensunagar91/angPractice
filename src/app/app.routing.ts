import { Routes,RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { PracticeComponent } from "./practice/practice.component";

const arr :Routes=[
{path:'',component:HomeComponent},
{path:'popup',component:PracticeComponent},
{path:'addtemp',loadChildren:()=>import('./addtemp/task.module').then(m=>m.TaskModule)},
{path:'pagenotfound',component:PagenotfoundComponent},
{path:'**',redirectTo:'/pagenotfound'}

];

export const routing=RouterModule.forRoot(arr);
