import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TeachersService } from '../../teachers.service';
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.sass']
})
export class DeleteDialogComponent implements OnInit {
  docId: string = "";

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public teachersService: TeachersService,
    private firestore: AngularFirestore
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.firestore.collection('investment').doc(this.docId).delete();
    this.teachersService.deleteTeachers(this.data.id);
  }

  ngOnInit(): void {
    console.log(this.data.id);
    this.firestore
      .collection("investment", (ref) =>
        ref
          .where("clientName", "==", this.data.clientName)
          .where("investedAmount", "==", this.data.investedAmount)
          .where("date", "==", this.data.date)
          .where("status", "==", this.data.status)
          .where("percentage", "==", this.data.percentage)
          .where("uniqueID", "==", this.data.uniqueID)
      )
      .get()
      .subscribe((ss) => {
        ss.docs.forEach((doc) => {
          this.docId = doc.id;
        });
      });
  }

}
