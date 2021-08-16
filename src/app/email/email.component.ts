import { Component, OnInit } from '@angular/core';
import * as data from 'src/assets/userprofile.json';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements OnInit {
  userprofile = null;
  constructor() {
    this.userprofile = data;
  }
  ngOnInit(): void {
    window.location.href = this.userprofile.contactemaillink;
  }
}
