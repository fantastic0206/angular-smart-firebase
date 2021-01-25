import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.sass']
})
export class EditCourseComponent {
  courseForm: FormGroup;
  formdata = {
    cName: 'PHP Development',
    cCode: 'IR43234',
    cDetails: 'Basic php course from beginning.',
    sDate: '2020-02-17T14:22:18Z',
    cTyme: '10:30',
    cPrice: '12.4$',
    pName: '2',
    maxStds: '130',
    contactNo: '1234567890'
  };
  constructor(private fb: FormBuilder) {
    this.courseForm = this.createContactForm();
  }
  onSubmit() {
    console.log('Form Value', this.courseForm.value);
  }
  createContactForm(): FormGroup {
    return this.fb.group({
      cName: [this.formdata.cName, [Validators.required]],
      cCode: [this.formdata.cCode],
      cDetails: [this.formdata.cDetails, [Validators.required]],
      sDate: [this.formdata.sDate, [Validators.required]],
      cTyme: [this.formdata.cTyme, [Validators.required]],
      cPrice: [this.formdata.cPrice, [Validators.required]],
      pName: [this.formdata.pName, [Validators.required]],
      maxStds: [this.formdata.maxStds],
      contactNo: [this.formdata.contactNo, [Validators.required]]
    });
  }
}
