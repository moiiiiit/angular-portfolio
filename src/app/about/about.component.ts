import { Component, OnInit } from '@angular/core';
import * as data from 'src/assets/userprofile.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  userprofile = null;
  constructor() {
    this.userprofile = data;
  }

  ngOnInit(): void {
  }

}
