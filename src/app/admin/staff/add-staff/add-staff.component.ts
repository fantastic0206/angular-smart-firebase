import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.sass']
})
export class AddStaffComponent {
  staffForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.staffForm = this.fb.group({
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
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      dob: ['', [Validators.required]],
      education: [''],
      uploadImg: ['']
    });
  }
  onSubmit() {
    console.log('Form Value', this.staffForm.value);
  }
}
