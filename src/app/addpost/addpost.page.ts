import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.page.html',
  styleUrls: ['./addpost.page.scss'],
})
export class AddpostPage implements OnInit {
   title: any;
   date: any ;
   content : any ;
  constructor() { }

  ngOnInit() {
  }

  addPost(){

  }
}
