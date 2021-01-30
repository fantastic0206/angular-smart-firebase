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
    clientName: new FormControl("clientName"),
    investedAmount: new FormControl("investedAmount"),
    percentage: new FormControl("percentage"),
    status: new FormControl("status"),
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
      this.dialogTitle = data.teachers.clientName;
      this.teachers = data.teachers;
      this.firestore
        .collection("investment", (ref) =>
          ref
            .where("clientName", "==", data.teachers.clientName)
            .where("investedAmount", "==", data.teachers.investedAmount)
            .where("date", "==", data.teachers.date)
            .where("status", "==", data.teachers.status)
            .where("percentage", "==", data.teachers.percentage)
        )
        .get()
        .subscribe((ss) => {
          ss.docs.forEach((doc) => {
            this.docId = doc.id;
          });
        });
    } else {
      this.dialogTitle = 'New Investment';
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
      date: [
        formatDate(this.teachers.date, 'yyyy-MM-dd', 'en'),
        [Validators.required],
      ],
      clientName: [this.teachers.clientName],
      investedAmount: [this.teachers.investedAmount],
      percentage: [this.teachers.percentage],
      status: [this.teachers.status],
      uniqueID: [this.teachers.uniqueID],
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
      this.firestore
        .collection("investment")
        .add({
          id: this.teachers.id,
          date: formatDate(this.proForm.value.date, "yyyy-MM-dd", "en"),
          clientName: this.proForm.value.clientName,
          investedAmount: this.proForm.value.investedAmount,
          percentage: this.proForm.value.percentage,
          status: this.proForm.value.status,
          uniqueID: this.teachers.uniqueID
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
        .collection("investment")
        .doc(this.docId)
        .update({
          id: this.teachers.id,
          date: formatDate(this.proForm.value.date, "yyyy-MM-dd", "en"),
          clientName: this.proForm.value.clientName,
          investedAmount: this.proForm.value.investedAmount,
          percentage: this.proForm.value.percentage,
          status: this.proForm.value.status,
          uniqueID: this.teachers.uniqueID
        });
      this.teachersService.addTeachers(this.proForm.getRawValue());
    }
  }

  ngOnInit(): void {
  }

}
