import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-addfriend',
  templateUrl: './addfriend.page.html',
  styleUrls: ['./addfriend.page.scss'],
})
export class AddfriendPage implements OnInit {
  users : any;
  constructor(public userService :UsersService) { }

  async ngOnInit() {
    this.users = await this.userService.getUsersDetails();
  }

  deleteUser(id : any ){
    let a =  this.userService.deletUser(id);
    console.log(a);
  }

  followUser(id){
    
  }
}
