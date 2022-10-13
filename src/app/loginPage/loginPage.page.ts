/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/semi */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'loginPage.page.html',
  styleUrls: ['loginPage.page.scss']
})
export class LoginPage {
 email: any;
 password: any;
 constructor(public authService: AuthService,public router: Router){}

 login(){
  const data = {
    email : this.email,
    password : this.password
  };
   this.authService.login(data).then(res => {
    if(res.user.uid){
      this.authService.getDetails({uid:res.user.uid}).subscribe((res:any)=>{
         localStorage.setItem("uid",res['uid']);
         localStorage.setItem("role","user");
         localStorage.setItem("username",res['username']);
         this.authService.isAuthUser();
         this.router.navigate(['/postspage'])
      },err => {
        console.log(err);
      })
    }
   })
 }


}
