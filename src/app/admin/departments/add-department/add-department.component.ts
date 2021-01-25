import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.sass']
})
export class AddDepartmentComponent {
  departmentForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.departmentForm = this.fb.group({
      dName: ['', [Validators.required]],
      hod: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      sYear: [''],
      sCapacity: ['', [Validators.required]],
      details: ['']
    });
  }
  onSubmit() {
    console.log('Form Value', this.departmentForm.value);
  }
}
