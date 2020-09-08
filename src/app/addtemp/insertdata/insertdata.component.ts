import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApidataService } from '../apidata.service';
import { Router } from '@angular/router';
import { Task } from '../task';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-insertdata',
  templateUrl: './insertdata.component.html',
  styleUrls: ['./insertdata.component.css'],
  providers:[ToastrService]


})
export class InsertdataComponent implements OnInit {


  public name:string="praveen";

  constructor(private api:ApidataService,private router:Router,private toastr:ToastrService) { }

  ngOnInit() {


  }

  onUpload(data){

   this.api.insertData( data).subscribe(
     (data:any)=>{

      // alert("record inserted");
      // this.messageService.add({severity:'success', summary: 'Success Message', detail:'record inserted successfuly'});
         this.toastr.success('Record Inserted Successfully','MasterG');

        this.router.navigate(['/addtemp']);
      }
   );
  }
//   onConfirm() {
//     this.messageService.clear('c');
// }

// onReject() {
//     this.messageService.clear('c');
// }

// clear() {
//     this.messageService.clear();
// }



}
