import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
isAuth = false ;
  constructor(public authService: AuthService) {}

ngOnInit() {
 this.isAuth =   this.authService.getIsAuth();
}
}
