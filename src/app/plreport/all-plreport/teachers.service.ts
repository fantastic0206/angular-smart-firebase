import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Teachers } from './teachers.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AngularFirestore } from "@angular/fire/firestore";
@Injectable()
export class TeachersService {
  private readonly API_URL = 'assets/data/teachers.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<Teachers[]> = new BehaviorSubject<Teachers[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  plreportData: any[] = [];
  constructor(private httpClient: HttpClient, private firestore: AngularFirestore) {}
  get data(): Teachers[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllTeacherss(): void {
    this.firestore
    .collection("plreport")
    .get()
    .subscribe((ss) => {
      ss.docs.forEach((doc) => {
        this.plreportData.push(doc.data());
        console.log(this.plreportData);
        this.isTblLoading = false;
        this.dataChange.next(this.plreportData);
      });
    });
    // this.httpClient.get<Teachers[]>(this.API_URL).subscribe(
    //   (data) => {
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
