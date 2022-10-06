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
export class PostsService {

  constructor(private auth:AngularFireAuth,
    private firestore : AngularFirestore,
    public router: Router
    ){

  }


  addNewPost(data: any){
    return this.firestore.collection('post').add(data);
  }


   async getPostDetails(){
    let a = [] ;
    await this.firestore.collection("post")
    .get().subscribe(function(querySnapshot) {
        querySnapshot.forEach(function(doc:any) {
            console.log(doc.id, " => ", doc.data());
           let data = {
              owner :  doc.data().owner,
              content : doc.data().content,
              ownerId: doc.data().ownerId,
              title: doc.data().title,
              id: doc.id
           }
            a.push(data);
        });
    })
    return a ;
  }

  deletePost(id: any ){
    return this.firestore.collection('post').doc(id).delete();
  }

}
