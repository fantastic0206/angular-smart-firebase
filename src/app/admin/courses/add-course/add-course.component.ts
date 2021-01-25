import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.sass']
})
export class AddCourseComponent {
  courseForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.courseForm = this.fb.group({
      cName: ['', [Validators.required]],
      cCode: [''],
      cDetails: ['', [Validators.required]],
      sDate: ['', [Validators.required]],
      cTyme: ['', [Validators.required]],
      cPrice: ['', [Validators.required]],
      pName: ['', [Validators.required]],
      maxStds: [''],
      contactNo: ['', [Validators.required]],
      uploadImg: ['']
    });
  }
  onSubmit() {
    console.log('Form Value', this.courseForm.value);
  }
}
