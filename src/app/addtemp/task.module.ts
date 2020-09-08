import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddtempComponent } from './addtemp.component';
import { InsertdataComponent } from './insertdata/insertdata.component';
import { UpdatedataComponent } from './updatedata/updatedata.component';
import { LoadingComponent } from '../loading/loading.component';
import { routing } from './task.routing';
import { NgxPaginationModule } from 'ngx-pagination';
import { GrdFilterPipe } from './search-filter.pipt';
import { CacheapiPipe } from './cacheapi.pipe';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { timer } from 'rxjs';






@NgModule({
  declarations :[
    AddtempComponent,
    InsertdataComponent,
    UpdatedataComponent,
    LoadingComponent,
    GrdFilterPipe,
    CacheapiPipe
  ],
  imports:[
    CommonModule,

    HttpClientModule,
    FormsModule,
    routing,
    NgxPaginationModule,
    ToastrModule.forRoot({timeOut:1000})

  ]
})

export class TaskModule {}
