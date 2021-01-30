import { Injectable, NgZone } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../../../environments/environment';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})

export class FirebaseService {
  constructor(
    public afs: AngularFirestore,
    private db: AngularFireDatabase
  ) { }
  getInvestments(){

    console.log("++++++++investmentdata+++++++",this.db.list('/investments').snapshotChanges());
    return this.db.list('/investments').snapshotChanges();
  }
}
