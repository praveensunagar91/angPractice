import { Component, OnInit } from '@angular/core';
import { ApidataService } from './apidata.service';
import { Task } from './task';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addtemp',
  templateUrl: './addtemp.component.html',
  styleUrls: ['./addtemp.component.css'],
  providers:[ToastrService]

})
export class AddtempComponent implements OnInit {
arr:Task[]=[];
isLoading=false;
config: any;
collection : Task[]=[];
searchstr:string;

  constructor(private api:ApidataService,private router:Router,private toastr: ToastrService) {
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.collection.length
    };
   }

  ngOnInit() {
    this.isLoading=true;
    this.api.getData().subscribe(

      (data:any)=>{
        this.isLoading=false;
        this.arr=data;

      },error=>{
         this.toastr.error('Something Went Wrong','MasterG');
      }
    );
  }

  deleteData(item:Task){
    this.api.removeData(item.Id).subscribe(
      (data:any)=>{
        this.arr.splice(this.arr.indexOf(item),1);
      //  alert("record removed");
      //  this.messageService.add({severity:'success', summary: 'Success Message', detail:'Record Removed'});
      this.toastr.success('Record Removed Successfully','MasterG');

      }
    );
  }

  editData(item:Task){
     this.router.navigate(['/addtemp/update',item.Id]);
  }

  pageChanged(event){
    this.config.currentPage = event;
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
