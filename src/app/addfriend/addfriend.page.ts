import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-addfriend',
  templateUrl: './addfriend.page.html',
  styleUrls: ['./addfriend.page.scss'],
})
export class AddfriendPage implements OnInit {
  users: any;
  isLoading = true;
  currentUser: any;
  userId: any;
  admin = 'admin@admin.com';
  constructor(
    public userService: UsersService,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    this.users = await this.userService.getUsersDetails();
    this.userId = localStorage.getItem('uid');
    this.authService.getDetails({ uid: this.userId }).subscribe((item: any) => {
      this.currentUser = item;
      console.log(item)
      this.isLoading = false;
    });
  }

  deleteUser(id: any) {
    this.userService.deletUser(id).then(()=> {
       window.location.reload();
    });

  }
}
