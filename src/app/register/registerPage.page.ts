import { Component, ViewChild } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: 'registerPage.page.html',
  styleUrls: ['registerPage.page.scss']
})
export class RegisterPage {
  @ViewChild(IonModal) modal: IonModal;
  currentImage: any;
  username: any;
  email: any;
  password: any;
  phone: any;
  isOpen: boolean = false;
  constructor(public authService : AuthService,public router:Router) {  }


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
            this.router.navigate(['/loginPage'])
          },err =>{
            this.openModal();
            console.log(err);
          })
         }
       },err => {
        this.openModal();
        console.log(err);
      })
   }

   openModal(){
      this.isOpen = !this.isOpen;
    }

}
