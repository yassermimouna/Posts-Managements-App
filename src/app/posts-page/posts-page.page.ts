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
  userId : any ;
  currentUser :any;
  isLoading = true ;
  admin = 'admin@admin.com'
  constructor(public authService:AuthService, public postsService: PostsService) { }

 async  ngOnInit() {
  this.posts =   await this.postsService.getPostDetails();
   this.role = localStorage.getItem('role');
   this.userId = localStorage.getItem('uid');
   this.userName = localStorage.getItem('username')
   this.authService.getDetails({uid: this.userId}).subscribe((item:any) => {
    this.currentUser = item;
    console.log(item)
    this.isLoading = false ;
   })
  }

  logout(){
    this.authService.logout();
  }

 async deletePost(postId : any){
     await this.postsService.deletePost(postId).then(()=>
        window.location.reload()
     );
  }



}
