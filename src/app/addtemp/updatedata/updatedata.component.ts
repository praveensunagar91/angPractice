import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../apidata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../task';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-updatedata',
  templateUrl: './updatedata.component.html',
  styleUrls: ['./updatedata.component.css'],
  providers:[ToastrService]
})
export class UpdatedataComponent implements OnInit {

  id:string="";
  title:string="";
  status:string="";


  constructor(private api:ApidataService,private activated:ActivatedRoute,private router:Router,private toastr:ToastrService) { }

  ngOnInit() {
    this.id=this.activated.snapshot.params['Id'];
    this.api.getById(this.id).subscribe(
      (data:Task[])=>{
        this.title=data[0].Title;
        this.status=data[0].Status
      }
    );
  }


  onUpdate(data){
    console.log(data);
    this.api.updateData(data).subscribe(
      (data:any)=>{

        this.toastr.success('Record Updated Successfully','MasterG');
        this.router.navigate(['/addtemp']);
      }
    );
  }
}
