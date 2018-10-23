import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import  { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class MyService {

  url:string = "https://jsonplaceholder.typicode.com"

  private stateSubject: BehaviorSubject<any> = new BehaviorSubject([]); 


  public getState(){
    return this.stateSubject.asObservable();
  }

  constructor(private http: HttpClient) { }

  searchUsers(){
   this.http.get(this.url + "/users").subscribe(users => this.stateSubject.next(users))
  }

  getUser(id:any){

    return this.http.get(this.url + "/users/" + id)
  

  }

  updateUser(user:any){

  }

  deleteUser(id:any){

  }
}
