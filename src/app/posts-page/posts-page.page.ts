import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.page.html',
  styleUrls: ['./posts-page.page.scss'],
})
export class PostsPage implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
  }

}
