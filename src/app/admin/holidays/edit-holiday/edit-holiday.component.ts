import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-holiday',
  templateUrl: './edit-holiday.component.html',
  styleUrls: ['./edit-holiday.component.sass']
})
export class EditHolidayComponent {
  holidayForm: FormGroup;
  formdata = {
    no: '99',
    title: 'christmas Holiday',
    sDate: '2019-12-17T14:22:18Z',
    eDate: '2020-01-04T14:22:18Z',
    type: '1',
    details: 'christmas Holiday'
  };
  constructor(private fb: FormBuilder) {
    this.holidayForm = this.createContactForm();
  }
  onSubmit() {
    console.log('Form Value', this.holidayForm.value);
  }
  createContactForm(): FormGroup {
    return this.fb.group({
      no: [this.formdata.no, [Validators.required]],
      title: [this.formdata.title, [Validators.required]],
      sDate: [this.formdata.sDate, [Validators.required]],
      eDate: [this.formdata.eDate, [Validators.required]],
      type: [this.formdata.type, [Validators.required]],
      details: [this.formdata.details]
    });
  }
}
