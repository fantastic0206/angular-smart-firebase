import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TeachersService } from '../../teachers.service';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { Teachers } from '../../teachers.model';
import { formatDate } from '@angular/common';
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.sass']
})
export class FormDialogComponent implements OnInit {
  action: string;
  dialogTitle: string;
  teachers: Teachers;
  docId: string = "";

  proForm = new FormGroup({
    date: new FormControl("date"),
    fullname: new FormControl("fullname"),
    username: new FormControl("username"),
    password: new FormControl("password"),
    status: new FormControl("status"),
    role: new FormControl("role"),
    email: new FormControl("email")
  });

  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public teachersService: TeachersService,
    private fb: FormBuilder,
    private firestore: AngularFirestore
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = data.teachers.username;
      this.teachers = data.teachers;
      this.firestore
        .collection("userManagement", (ref) =>
          ref
            .where("fullname", "==", data.teachers.fullname)
            .where("username", "==", data.teachers.username)
            .where("date", "==", data.teachers.date)
            .where("status", "==", data.teachers.status)
            .where("email", "==", data.teachers.email)
            .where("password", "==", data.teachers.password)
            .where("role", "==", data.teachers.role)
            .where("uniqueID", "==", data.teachers.uniqueID)
            .where("id", "==", data.teachers.id)
        )
        .get()
        .subscribe((ss) => {
          ss.docs.forEach((doc) => {
            this.docId = doc.id;
          });
        });
    } else {
      this.dialogTitle = 'New Usermanagement';
      this.teachers = new Teachers({});
    }
    this.proForm = this.createContactForm();
  }
  formControl = new FormControl('', [
    Validators.required,
    // Validators.email,
  ]);
  getErrorMessage() {
    return this.formControl.hasError('required')
      ? 'Required field'
      : this.formControl.hasError('email')
      ? 'Not a valid email'
      : '';
  }
  createContactForm(): FormGroup {
    return this.fb.group({
      id: [this.teachers.id],
      // email: [
      //   this.teachers.email,
      //   [Validators.required, Validators.email, Validators.minLength(5)],
      // ],
      // date: [
      //   formatDate(this.teachers.date, 'yyyy-MM-dd', 'en'),
      //   [Validators.required],
      // ],
      fullname: [this.teachers.fullname],
      username: [this.teachers.username],
      password: [this.teachers.password],
      uniqueID: [this.teachers.uniqueID],
      status: [this.teachers.status],
      role: [this.teachers.role],
      date: [this.teachers.date],
      email: [this.teachers.email]
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    if (this.action === "add") {
      console.log(this.proForm.getRawValue());
      this.firestore
        .collection("userManagement")
        .add({
          id: this.teachers.id,
          date: formatDate(this.proForm.value.date, "yyyy-MM-dd", "en"),
          fullname: this.proForm.value.fullname,
          username: this.proForm.value.username,
          password: this.proForm.value.password,
          uniqueID: this.teachers.id,
          status: this.proForm.value.status,
          role: this.proForm.value.role,
          email: this.proForm.value.email
        })
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
      this.teachersService.addTeachers(this.proForm.getRawValue());
    } else if (this.action === "edit") {
      this.firestore
        .collection("userManagement")
        .doc(this.docId)
        .update({
          id: this.teachers.id,
          date: formatDate(this.proForm.value.date, "yyyy-MM-dd", "en"),
          fullname: this.proForm.value.fullname,
          username: this.proForm.value.username,
          password: this.proForm.value.password,
          email: this.proForm.value.email,
          status: this.proForm.value.status,
          role: this.proForm.value.role,
          uniqueID: this.teachers.uniqueID,
        });
      this.teachersService.addTeachers(this.proForm.getRawValue());
    }
  }

  ngOnInit(): void {
  }

}
