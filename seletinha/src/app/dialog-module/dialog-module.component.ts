import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-module',
  templateUrl: './dialog-module.component.html',
  styleUrls: ['./dialog-module.component.scss']
})
export class DialogModuleComponent implements OnInit {

  name: string = "";

  constructor(public dialogRef: MatDialogRef<DialogModuleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router) {

  }

  ngOnInit(): void {
    this.name = this.data;

    setTimeout(() => {
      this.dialogRef.close();
      this.router.navigate(['/login']);
    }, 10000);
  }

  close(): void {
    this.dialogRef.close();
  }

}
