import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PlreportRoutingModule } from "./plreport-routing.module";
import { AllPlreportComponent } from "./all-plreport/all-plreport.component";
import { DeleteDialogComponent } from "./all-plreport/dialogs/delete/delete.component";
import { FormDialogComponent } from "./all-plreport/dialogs/form-dialog/form-dialog.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSortModule } from "@angular/material/sort";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MaterialFileInputModule } from "ngx-material-file-input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTabsModule } from "@angular/material/tabs";
import { MatMenuModule } from "@angular/material/menu";
import { TeachersService } from "./all-plreport/teachers.service";

import { NgxEchartsModule } from 'ngx-echarts';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    AllPlreportComponent,
    DeleteDialogComponent,
    FormDialogComponent,
  ],
  imports: [
    CommonModule,
    PlreportRoutingModule,

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
    MatDatepickerModule,
    MatCheckboxModule,
    MatTabsModule,
    MaterialFileInputModule,
    MatMenuModule,
    MatProgressSpinnerModule,

    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    NgApexchartsModule,
  ],
  providers: [TeachersService],
})
export class PlreportModule {}
