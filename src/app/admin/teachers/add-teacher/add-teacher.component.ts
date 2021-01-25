import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.sass'],
})
export class AddTeacherComponent {
  proForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.proForm = this.fb.group({
      first: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      last: [''],
      gender: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      password: ['', [Validators.required]],
      conformPassword: ['', [Validators.required]],
      designation: [''],
      department: [''],
      address: [''],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      dob: ['', [Validators.required]],
      education: [''],
      uploadImg: [''],
    });
  }
  onSubmit() {
    console.log('Form Value', this.proForm.value);
  }
}
