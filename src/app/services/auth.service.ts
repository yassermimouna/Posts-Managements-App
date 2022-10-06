/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable no-trailing-spaces */
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage} from '@angular/fire/storage';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth:AngularFireAuth,
    private firestore : AngularFirestore,
    public router: Router
    ){
  }

  register(data: any){
     return this.firestore.collection('users').doc(data.uid).set(data);
  }

  signUp(data: any ){
    return this.auth.createUserWithEmailAndPassword(data.email,data.password);
  }

  getDetails(data: any){
    return this.firestore.collection('users').doc(data.uid).valueChanges();
  }

  login(data: any){
    return this.auth.signInWithEmailAndPassword(data.email,data.password);
  }


 logout(){
  localStorage.removeItem("role");
  localStorage.removeItem("uid");
  localStorage.removeItem("username");
  this.router.navigate(['/loginPage']);
 }
}
