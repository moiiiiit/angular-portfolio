import { ImageComponentComponent } from './../image-component/image-component.component';
import { Component, OnInit,
} from '@angular/core';
import * as data from 'src/assets/userprofile.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  userprofile = null;
  hideme=[]
  hidemeimg=[]
  constructor() {
    this.userprofile = data;
    for(let i=0;i<this.userprofile.projects.length;i++){
      this.hideme[i] = this.userprofile.projects[i].hasOwnProperty('medialink') ? 1 : 0
      this.hidemeimg[i] = this.userprofile.projects[i].hasOwnProperty('imglink') ? 1 : 0
    }
  }

  ngOnInit(): void {
    console.log(this.hideme)
  }

}
