/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable no-trailing-spaces */
import { provideFirestore,getFirestore, docSnapshots } from '@angular/fire/firestore';
import { provideStorage, getStorage} from '@angular/fire/storage';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(private auth:AngularFireAuth,
    private firestore : AngularFirestore,
    public router: Router
    ){

  }

   async getUsersDetails(){
    let a = [] ;
    await this.firestore.collection("users")
    .get().subscribe(function(querySnapshot) {
        querySnapshot.forEach(function(doc:any) {
            console.log(doc.id, " => ", doc.data());
           let data = {
              email :   doc.data().email,
              phone :   doc.data().phone,
              uid:      doc.data().uid,
              username: doc.data().username,
           }
            a.push(data);
        });
    })
    return a ;
  }

  deletUser(id: any ){
    return this.firestore.collection('users').doc(id).delete();
  }

}
