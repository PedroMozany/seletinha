import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homePage',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  professor(){
    this.route.navigate(['/login']);
  }

  aluno(){
    this.route.navigate(['/loginAluno']);
  }

}
