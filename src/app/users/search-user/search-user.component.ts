import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyService } from 'src/app/shared/my.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {


  name:string

  @Output()
  users:EventEmitter<any> = new EventEmitter<any>()





  constructor(private myservice: MyService) { }

  ngOnInit() {
  }

  search(){
    console.log('.....' + this.name);
    this.users.emit(this.myservice.searchUsers())



    
  }

}
