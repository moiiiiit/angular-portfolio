import { Component, OnInit } from '@angular/core';
import * as data from 'src/assets/userprofile.json';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  userprofile = null;
  resumeurl = "";
    constructor() {
    this.userprofile = data;
    this.resumeurl = this.userprofile.resumeiframesrc;
  }

  ngOnInit(): void {}
}
