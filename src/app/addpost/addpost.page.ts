import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.page.html',
  styleUrls: ['./addpost.page.scss'],
})
export class AddpostPage implements OnInit {
   title: any;
   content : any ;
   errorIsOpen : boolean = false;
   isOpen: boolean = false;
   constructor(public postsService:PostsService,public router:Router) { }

  ngOnInit() {
    
  }

  addPost(){
    const postData = {
      title : this.title,
      content : this.content,
      owner: localStorage.getItem('username'),
      ownerId: localStorage.getItem('uid')
    };
    if(!this.title || ! this.content){
       this.openError();
    }else {
      this.openModal();
       this.postsService.addNewPost(postData).then((res) => {
        this.openModal();
        window.location.reload();
    });
    }
  }

  openModal(){
    this.isOpen = !this.isOpen;
  }

  openError(){
    this.errorIsOpen = !this.errorIsOpen;
  }

}
