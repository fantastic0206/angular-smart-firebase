import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { LeaveRequestService } from '../../leave-request.service';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { LeaveRequest } from '../../leave-request.model';
import { MAT_DATE_LOCALE } from '@angular/material/core';
@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.sass'],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  leaveRequestForm: FormGroup;
  leaveRequest: LeaveRequest;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public leaveRequestService: LeaveRequestService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = 'Edit Leave Request';
      this.leaveRequest = data.leaveRequest;
    } else {
      this.dialogTitle = 'New Leave Request';
      this.leaveRequest = new LeaveRequest({});
    }
    this.leaveRequestForm = this.createContactForm();
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
      id: [this.leaveRequest.id],
      class: [this.leaveRequest.class, [Validators.required]],
      section: [this.leaveRequest.section, [Validators.required]],
      applyDate: [this.leaveRequest.applyDate, [Validators.required]],
      fromDate: [this.leaveRequest.fromDate, [Validators.required]],
      toDate: [this.leaveRequest.toDate, [Validators.required]],
      reason: [this.leaveRequest.reason, [Validators.required]],
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.leaveRequestService.addLeaveRequest(
      this.leaveRequestForm.getRawValue()
    );
  }
}
