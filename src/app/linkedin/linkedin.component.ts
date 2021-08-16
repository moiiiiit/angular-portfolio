import { Component, OnInit } from '@angular/core';
import * as data from 'src/assets/userprofile.json';

@Component({
  selector: 'app-linkedin',
  templateUrl: './linkedin.component.html',
  styleUrls: ['./linkedin.component.scss'],
})
export class LinkedinComponent implements OnInit {
  userprofile = null;
  constructor() {
    this.userprofile = data;
  }
  ngOnInit(): void {
    window.location.href = this.userprofile.contactlinkedinlink;
  }
}
