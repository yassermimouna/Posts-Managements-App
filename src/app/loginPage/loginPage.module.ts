import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginPage } from './loginPage.page';
import { AngularFireAuthModule  } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AuthService } from '../services/auth.service';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: LoginPage }]),
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  declarations: [LoginPage],
  providers : [AuthService]
})
export class LoginPageModule {}
