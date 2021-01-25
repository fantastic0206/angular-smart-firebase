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


@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.sass']
})
export class FormDialogComponent implements OnInit {
  action: string;
  dialogTitle: string;
  proForm: FormGroup;
  teachers: Teachers;

  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public teachersService: TeachersService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = data.teachers.scriptName;
      this.teachers = data.teachers;
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
      sno: [this.teachers.sno],
      // email: [
      //   this.teachers.email,
      //   [Validators.required, Validators.email, Validators.minLength(5)],
      // ],
      date: [
        formatDate(this.teachers.date, 'yyyy-MM-dd', 'en'),
        [Validators.required],
      ],
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
    this.teachersService.addTeachers(this.proForm.getRawValue());
  }

  ngOnInit(): void {
  }

}
