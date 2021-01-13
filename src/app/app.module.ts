import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { CommonModule } from "@angular/common";
import { NavbarComponent } from './navbar/navbar.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { StoreModule } from "@ngrx/store";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DisplayComponent } from './ngrxstore/display/display.component';
import { InsertComponent } from './ngrxstore/insert/insert.component';
import { userReducer } from './ngrxstore/reducer';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PracticeComponent } from './practice/practice.component';



@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,

    HomeComponent,

    PagenotfoundComponent,

    DisplayComponent,

    InsertComponent,

    ParentComponent,

    ChildComponent,

    PracticeComponent,





  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    routing,
    ToastrModule.forRoot({timeOut:1000}),
    StoreModule.forRoot({userList:userReducer}),




],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
