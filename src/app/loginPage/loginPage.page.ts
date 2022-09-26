/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/semi */
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'loginPage.page.html',
  styleUrls: ['loginPage.page.scss']
})
export class LoginPage {
 email: any;
 password: any;
 constructor(public authService: AuthService){}

 login(){
  const data = {
    email : this.email,
    password : this.password
  };
   this.authService.login(data).then(res => {
    console.log(res);
    if(res.user.uid){
      this.authService.getDetails({uid:res.user.uid}).subscribe((res:any)=>{
        console.log('details result : ', res);
        alert('welcome '+res['name']);
      },err => {
        console.log(err);
      })
    }
   })
 }

}
