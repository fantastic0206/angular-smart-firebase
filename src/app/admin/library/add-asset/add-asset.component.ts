import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.sass']
})
export class AddAssetComponent {
  libraryForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.libraryForm = this.fb.group({
      no: ['', [Validators.required]],
      title: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      autherName: [''],
      publisher: [''],
      department: ['', [Validators.required]],
      aType: ['', [Validators.required]],
      date: ['', [Validators.required]],
      price: ['', [Validators.required]],
      status: [''],
      details: ['']
    });
  }
  onSubmit() {
    console.log('Form Value', this.libraryForm.value);
  }
}
