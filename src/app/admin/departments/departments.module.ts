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
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatMenuModule } from '@angular/material/menu';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { AllDepartmentsComponent } from './all-departments/all-departments.component';
import { DeleteDialogComponent } from './all-departments/dialogs/delete/delete.component';
import { FormDialogComponent } from './all-departments/dialogs/form-dialog/form-dialog.component';
import { DepartmentService } from './all-departments/department.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AddDepartmentComponent,
    EditDepartmentComponent,
    AllDepartmentsComponent,
    DeleteDialogComponent,
    FormDialogComponent,
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
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MaterialFileInputModule,
    MatDatepickerModule,
    MatMenuModule,
    DepartmentsRoutingModule,
    MatProgressSpinnerModule,
  ],
  providers: [DepartmentService],
})
export class DepartmentsModule {}
