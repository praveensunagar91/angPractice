import { Routes,RouterModule } from "@angular/router";
import { AddtempComponent } from './addtemp.component';
import { InsertdataComponent } from './insertdata/insertdata.component';
import { UpdatedataComponent } from './updatedata/updatedata.component';

const arr:Routes=[
  {path:'',children :[
    {path:'',component:AddtempComponent},
  {path:'upload',component:InsertdataComponent},
  {path:'update/:Id',component:UpdatedataComponent}
  ]}
];

export const routing=RouterModule.forChild(arr);
