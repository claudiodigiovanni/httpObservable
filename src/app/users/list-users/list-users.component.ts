import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MyService } from 'src/app/shared/my.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(private myservice: MyService) { }

  users: Observable<any> 

  ngOnInit() {

    this.users = this.myservice .getState();
  }


  getUsersList(items){
    console.log(items);
    
    if (items)
      this.users = items;
  }

}
