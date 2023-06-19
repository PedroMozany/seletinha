import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent implements OnInit {

  elements: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.local();
  }

  local(){
    const url = 'http://localhost:8080/api/ativosDesc'
    this.http.get(url).subscribe((e:any) => {
      this.elements = e;
    });
  }

}
