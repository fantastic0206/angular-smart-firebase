import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-fees',
  templateUrl: './add-fees.component.html',
  styleUrls: ['./add-fees.component.sass']
})
export class AddFeesComponent {
  feesForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.feesForm = this.fb.group({
      rollNo: ['', [Validators.required]],
      sName: ['', [Validators.required]],
      fType: ['', [Validators.required]],
      department: ['', [Validators.required]],
      date: ['', [Validators.required]],
      invoiceNo: ['', [Validators.required]],
      pType: ['', [Validators.required]],
      status: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      details: ['']
    });
  }
  onSubmit() {
    console.log('Form Value', this.feesForm.value);
  }
}
