import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Pipe({
  name: 'cacheapi',
  pure:false
})
export class CacheapiPipe implements PipeTransform {

  private chachedApiData:any=null;
  private chachedApiUrl="";

  constructor(private http:HttpClient){}

  transform(url:string): any {
     console.log('cache api called');
     console.log(this.chachedApiUrl);
   if(url!==this.chachedApiUrl){
     this.chachedApiData=null;
     this.chachedApiUrl=url;

     this.http.get(url).subscribe(
       data=>{
         this.chachedApiData=data;
       }

     );
   }
   else{
     console.log('data returned from cache');
   }
   return this.chachedApiData;
  }

}
