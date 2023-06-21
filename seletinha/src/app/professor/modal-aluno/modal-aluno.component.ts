import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-aluno',
  templateUrl: './modal-aluno.component.html',
  styleUrls: ['./modal-aluno.component.scss']
})
export class ModalAlunoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalAlunoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

}
