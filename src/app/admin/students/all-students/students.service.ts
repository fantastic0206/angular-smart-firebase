import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Students } from './students.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Injectable()
export class StudentsService {
  private readonly API_URL = 'assets/data/students.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<Students[]> = new BehaviorSubject<Students[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {}
  get data(): Students[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllStudentss(): void {
    this.httpClient.get<Students[]>(this.API_URL).subscribe(
      (data) => {
        this.isTblLoading = false;
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        this.isTblLoading = false;
        console.log(error.name + ' ' + error.message);
      }
    );
  }
  addStudents(students: Students): void {
    this.dialogData = students;

    /*  this.httpClient.post(this.API_URL, students).subscribe(data => {
      this.dialogData = students;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updateStudents(students: Students): void {
    this.dialogData = students;

    /* this.httpClient.put(this.API_URL + students.id, students).subscribe(data => {
      this.dialogData = students;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteStudents(id: number): void {
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
