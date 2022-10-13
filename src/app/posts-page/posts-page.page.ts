import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.page.html',
  styleUrls: ['./posts-page.page.scss'],
})
export class PostsPage implements OnInit {
  posts: any ;
  role : any ;
  userName : any ;
  constructor(public authService:AuthService, public postsService: PostsService) { }

 async  ngOnInit() {
  this.posts =   await this.postsService.getPostDetails();
   this.role = localStorage.getItem('role');
   this.userName = localStorage.getItem('username')
   console.log(this.userName);
  }

  logout(){
    this.authService.logout();
  }

  deletePost(postId : any){
     let a = this.postsService.deletePost(postId);
     window.location.reload();
  }

}
