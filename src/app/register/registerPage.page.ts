import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: 'registerPage.page.html',
  styleUrls: ['registerPage.page.scss']
})
export class RegisterPage {
  currentImage: any;
  username: any;
  email: any;
  password: any;
  phone: any;

  constructor(public authService : AuthService) {  }


   register(){
       this.authService.signUp({email: this.email, password: this.password}).then(res =>{
         if(res.user.uid){
          const data = {
            email : this.email,
            password : this.password,
            phone: this.phone,
            username : this.username,
            uid: res.user.uid
          };
          this.authService.register(data).then(res => {
            alert('account created ');
          },err =>{
            console.log(err);
          })
         }
       })
   }

}
