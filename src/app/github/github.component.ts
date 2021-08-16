import { Component, OnInit } from '@angular/core';
import * as data from 'src/assets/userprofile.json';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss'],
})
export class GithubComponent implements OnInit {
  userprofile = null;
  constructor() {
    this.userprofile = data;
  }

  ngOnInit(): void {
    window.location.href = this.userprofile.contactgithublink;
  }
}
