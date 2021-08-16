import { Component, OnInit,
} from '@angular/core';
import * as data from 'src/assets/userprofile.json';
import { HostListener, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  userprofile = null;
  aspectRatio = 16/9;
  isMobile = false;
  hideme=[]
  hidemeimg=[]
  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.userprofile = data;
    for(let i=0;i<this.userprofile.projects.length;i++){
      this.hideme[i] = this.userprofile.projects[i].hasOwnProperty('medialink') ? 1 : 0
      this.hidemeimg[i] = this.userprofile.projects[i].hasOwnProperty('imglink') ? 1 : 0
    }
    this.aspectRatio = window.innerHeight / window.innerWidth;
    if (this.aspectRatio > 1.716) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.aspectRatio = window.innerHeight / window.innerWidth;
    if (this.aspectRatio > 1.716) {
      this.isMobile = true;
      this.changeDetectorRef.detectChanges();
    } else {
      this.isMobile = false;
      this.changeDetectorRef.detectChanges();
    }
  }
  ngOnInit(): void {
    console.log(this.hideme)
  }

}
