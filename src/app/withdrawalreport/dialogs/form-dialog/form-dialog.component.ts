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
    accountName: new FormControl("accountName"),
    tradingClient: new FormControl("tradingClient"),
    amount: new FormControl("amount"),
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
      this.dialogTitle = data.teachers.accountName;
      this.teachers = data.teachers;
      this.firestore
        .collection("withdrawalreport", (ref) =>
          ref
            .where("accountName", "==", data.teachers.accountName)
            .where("withdrawalAmount", "==", data.teachers.withdrawalAmount)
            .where("date", "==", data.teachers.date)
            .where("id", "==", data.teachers.id)
        )
        .get()
        .subscribe((ss) => {
          ss.docs.forEach((doc) => {
            this.docId = doc.id;
          });
        });
    } else {
      this.dialogTitle = 'New Withdrawal';
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
      date: [this.teachers.date],
      accountName: [this.teachers.accountName],
      withdrawalAmount: [this.teachers.withdrawalAmount],
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    // console.log(this.proForm.value.date);
    if (this.action === "add") {
      this.firestore
        .collection("withdrawalreport")
        .add({
          id: this.teachers.id,
          date: formatDate(this.proForm.value.date, "yyyy-MM-dd", "en"),
          accountName: this.proForm.value.accountName,
          withdrawalAmount: this.proForm.value.withdrawalAmount,
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
        .collection("withdrawalreport")
        .doc(this.docId)
        .update({
          id: this.teachers.id,
          date: formatDate(this.proForm.value.date, "yyyy-MM-dd", "en"),
          accountName: this.proForm.value.accountName,
          withdrawalAmount: this.proForm.value.withdrawalAmount,
        });
      this.teachersService.addTeachers(this.proForm.getRawValue());
    }
  }

  ngOnInit(): void {
  }

}
