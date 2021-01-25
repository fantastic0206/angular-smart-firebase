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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { FeesRoutingModule } from './fees-routing.module';
import { AllFeesComponent } from './all-fees/all-fees.component';
import { AddFeesComponent } from './add-fees/add-fees.component';
import { EditFeesComponent } from './edit-fees/edit-fees.component';
import { FeeReceiptComponent } from './fee-receipt/fee-receipt.component';
import { DeleteDialogComponent } from './all-fees/dialogs/delete/delete.component';
import { FormDialogComponent } from './all-fees/dialogs/form-dialog/form-dialog.component';
import { FeesService } from './all-fees/fees.service';

@NgModule({
  declarations: [
    AllFeesComponent,
    AddFeesComponent,
    EditFeesComponent,
    FeeReceiptComponent,
    DeleteDialogComponent,
    FormDialogComponent,
  ],
  imports: [
    CommonModule,
    FeesRoutingModule,
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
    MatCheckboxModule,
    MatTabsModule,
    MatSelectModule,
    MaterialFileInputModule,
    MatDatepickerModule,
    MatMenuModule,
    MatRadioModule,
    MatProgressSpinnerModule,
  ],
  providers: [FeesService],
})
export class FeesModule {}
