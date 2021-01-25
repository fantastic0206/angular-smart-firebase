import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMenuModule } from '@angular/material/menu';
import { StaffRoutingModule } from './staff-routing.module';
import { AllstaffComponent } from './all-staff/all-staff.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormDialogComponent } from './all-staff/dialog/form-dialog/form-dialog.component';
import { DeleteDialogComponent } from './all-staff/dialog/delete/delete.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { AboutStaffComponent } from './about-staff/about-staff.component';
import { StaffService } from './all-staff/staff.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    AllstaffComponent,
    FormDialogComponent,
    DeleteDialogComponent,
    AddStaffComponent,
    EditStaffComponent,
    AboutStaffComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSortModule,
    MatToolbarModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatMenuModule,
    MatTabsModule,
    MaterialFileInputModule,
    StaffRoutingModule,
    MatProgressSpinnerModule,
  ],
  providers: [StaffService],
})
export class StaffModule {}
