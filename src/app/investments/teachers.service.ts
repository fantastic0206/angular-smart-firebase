import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Teachers } from './teachers.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AngularFirestore } from "@angular/fire/firestore";

import { FirebaseService } from './../core/service/firebase.service';
import { AuthService } from 'src/app/core/service/auth.service';

@Injectable()
export class TeachersService {
  private readonly API_URL = 'assets/data/investments.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<Teachers[]> = new BehaviorSubject<Teachers[]>([]);
  investData: any[] = [];

  // Temporarily stores data from dialogs
  dialogData: any;
  investments$:Observable<any>;
  constructor(private httpClient: HttpClient, private firestore: AngularFirestore) {}
  get data(): Teachers[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllTeacherss(): void {
    // this.investments$=this.firebaseService.getInvestments();
    this.firestore
    .collection("investment")
    .get()
    .subscribe((ss) => {
      ss.docs.forEach((doc) => {
        this.investData.push(doc.data());
        console.log(this.investData);
        this.isTblLoading = false;
        this.dataChange.next(this.investData);
      });
    });
    // this.httpClient.get<Teachers[]>(this.API_URL).subscribe(
    //   (data) => {
    //     console.log("data", data)
    //     this.isTblLoading = false;
    //     this.dataChange.next(data);
    //   },
    //   (error: HttpErrorResponse) => {
    //     this.isTblLoading = false;
    //     console.log(error.name + ' ' + error.message);
    //   }
    // );
  }
  addTeachers(teachers: Teachers): void {
    this.dialogData = teachers;

    /*  this.httpClient.post(this.API_URL, teachers).subscribe(data => {
      this.dialogData = teachers;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updateTeachers(teachers: Teachers): void {
    this.dialogData = teachers;

    /* this.httpClient.put(this.API_URL + teachers.id, teachers).subscribe(data => {
      this.dialogData = teachers;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteTeachers(id: number): void {
    console.log(id);

    /*  this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(id);
      },
      (err: HttpErrorResponse) => {
         // error code here
      }
    );*/
  }
}
