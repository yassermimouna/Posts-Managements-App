import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  currentUser: any;
  isLoading = true;
  constructor(
    private authService: AuthService,
    private userService: UsersService,
    public router : Router
  ) {}

  ngOnInit() {
    let id = localStorage.getItem('uid');
    this.authService.getDetails({ uid: id }).subscribe((item: any) => {
      this.currentUser = item;
      console.log(item);
      this.isLoading = false;
    });
  }

  updateProfile() {
    console.log(this.currentUser);
    if (
      this.currentUser.username.length < 5 ||
      this.currentUser.email.length < 5 ||
      this.currentUser.phone.length < 4 ||
      this.currentUser.password.length < 5
    ) {
      alert('All fields length should be more than 5 characters !');
    } else {
      this.userService.updateUser(this.currentUser);
      this.router.navigate(['/postspage']);
    }
  }
}
