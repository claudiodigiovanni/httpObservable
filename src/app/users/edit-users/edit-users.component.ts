import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyService } from 'src/app/shared/my.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  id:string
  user:any = {}
  constructor(private route: ActivatedRoute, myservice: MyService, private router: Router) { 
    route.params.subscribe(params => {
      this.id = params.id;
      console.log('....' + this.id);
      myservice.getUser(this.id).subscribe(user => this.user = user)
      
    });
  }

  back(){
    this.router.navigate(["/"]);
  }
  ngOnInit() {
  }

}
