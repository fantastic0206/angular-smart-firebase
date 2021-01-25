import { Injectable, NgZone } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../../../environments/environment';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})

export class FirebaseService {
  constructor(
    public afs: AngularFirestore
  ) { }
  getUsers(){
    return new Promise<any>((resolve, reject) => {
      console.log("firebase.getusers.success");
      this.afs.collection('/people').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots)
      })
    })
  }
}
