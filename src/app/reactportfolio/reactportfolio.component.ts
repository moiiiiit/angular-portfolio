import { Component, OnInit } from '@angular/core';
import * as data from 'src/assets/userprofile.json';

@Component({
  selector: 'app-reactportfolio',
  templateUrl: './reactportfolio.component.html',
  styleUrls: ['./reactportfolio.component.scss']
})
export class ReactportfolioComponent implements OnInit {
  userprofile = null;
  constructor() {
    this.userprofile = data;
  }
  ngOnInit(): void {
    window.location.href = this.userprofile.altportfoliolink;
  }

}
