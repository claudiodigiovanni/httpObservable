import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import {HttpClientModule} from '@angular/common/http';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchUserComponent } from './users/search-user/search-user.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { EditUsersComponent } from './users/edit-users/edit-users.component';
import { ViewUsersComponent } from './users/view-users/view-users.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchUserComponent,
    ListUsersComponent,
    EditUsersComponent,
    ViewUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
