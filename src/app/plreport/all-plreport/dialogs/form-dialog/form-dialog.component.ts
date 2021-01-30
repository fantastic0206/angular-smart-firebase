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
    scriptType: new FormControl("scriptType"),
    scriptName: new FormControl("scriptName"),
    positionType: new FormControl("positionType"),
    holdingPeriod: new FormControl("holdingPeriod"),
    profitLoss: new FormControl("profitLoss"),
    accountName: new FormControl("accountName"),
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
      this.dialogTitle = data.teachers.scriptName;
      this.teachers = data.teachers;
      this.firestore
        .collection("plreport", (ref) =>
          ref
            .where("scriptType", "==", data.teachers.scriptType)
            .where("scriptName", "==", data.teachers.scriptName)
            .where("date", "==", data.teachers.date)
            .where("positionType", "==", data.teachers.positionType)
            .where("holdingPeriod", "==", data.teachers.holdingPeriod)
            .where("profitLoss", "==", data.teachers.profitLoss)
            .where("accountName", "==", data.teachers.accountName)
        )
        .get()
        .subscribe((ss) => {
          ss.docs.forEach((doc) => {
            this.docId = doc.id;
          });
        });
    } else {
      this.dialogTitle = 'New P&LReport';
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
      scriptType: [this.teachers.scriptType],
      scriptName: [this.teachers.scriptName],
      positionType: [this.teachers.positionType],
      holdingPeriod: [this.teachers.holdingPeriod],
      profitLoss: [this.teachers.profitLoss],
      accountName: [this.teachers.accountName],
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
        .collection("plreport")
        .add({
          id: this.teachers.id,
          date: formatDate(this.proForm.value.date, "yyyy-MM-dd", "en"),
          accountName: this.proForm.value.accountName,
          scriptType: this.proForm.value.scriptType,
          scriptName: this.proForm.value.scriptName,
          positionType: this.proForm.value.positionType,
          holdingPeriod: this.proForm.value.holdingPeriod,
          profitLoss: this.proForm.value.profitLoss,
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
        .collection("plreport")
        .doc(this.docId)
        .update({
          id: this.teachers.id,
          date: formatDate(this.proForm.value.date, "yyyy-MM-dd", "en"),
          accountName: this.proForm.value.accountName,
          scriptType: this.proForm.value.scriptType,
          scriptName: this.proForm.value.scriptName,
          positionType: this.proForm.value.positionType,
          holdingPeriod: this.proForm.value.holdingPeriod,
          profitLoss: this.proForm.value.profitLoss,
        });
      this.teachersService.addTeachers(this.proForm.getRawValue());
    }
  }

  ngOnInit(): void {
  }

}
