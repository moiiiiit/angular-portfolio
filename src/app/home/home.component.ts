import { Component, OnInit } from '@angular/core';
import * as userProfile from 'src/assets/userprofile.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { 
    console.log(userProfile)
  }

  ngOnInit(): void {
  }

}
