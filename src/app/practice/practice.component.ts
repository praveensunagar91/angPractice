import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Player } from './players';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css'],
  providers:[ToastrService]
})
export class PracticeComponent implements OnInit {
  Id : string ="";
  Name : string="";
  Country : string ="";
  updated:any;
  id;
  name;
  country;

  arr:Player[]=[new Player('10','Sachin','India'),
                new Player('19','Dravid','India'),
                new Player('14','Ponting','Australia'),
                new Player('18','Gilchrist','Australia')];

  constructor(private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(data){

    this.arr.push(data);
    console.log(this.arr);




      this.toastr.success('Record added Successfully','Angular');

  }

  onDelete(item){

    if(this.arr.length===1){
      this.toastr.warning('You Cannot Remove record now','Angular');
    }
    else{
    this.arr.splice(this.arr.indexOf(item),1);
     this.toastr.success('Record removed Successfully','Angular');

    }
  }

  onEdit(i){

    this.Id=this.arr[i].id;
    this.Name=this.arr[i].name;
    this.Country=this.arr[i].country;
    this.updated=i;

  }

  onUpdate(){
    let data=this.updated;
    for(let i=0;i<=this.arr.length;i++){
      if(i==data){
        this.arr[i].id=this.Id;
        this.arr[i].name=this.Name;
        this.arr[i].country=this.Country;

        this.Id="";
        this.Name="";
        this.Country="";

        this.toastr.success('Record Updated Successfully','Angular');
      }
    }
  }
}
