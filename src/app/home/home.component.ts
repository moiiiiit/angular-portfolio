import { Component, OnInit, ViewChild } from '@angular/core';
import * as data from 'src/assets/userprofile.json';
import Typewriter from 't-writer.js';
import { HostListener, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('tw') typewriterElement;
  @ViewChild('tw2') typewriterElement2;
  aspectRatio = 16/9;
  isMobile = false;
  userprofile = null;
  logos = []
  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.userprofile = data;
    for(let i=1; i<=this.userprofile.numskilllogos; i++){
      this.logos.push("/assets/skilllogos/"+i.toString()+".png");
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

  ngAfterViewInit(): void{
    const target = this.typewriterElement.nativeElement
    const target2 = this.typewriterElement2.nativeElement;
    const writer = new Typewriter(target, {
      typeColor: '#868c9c',
    });
    const writer2 = new Typewriter(target2, {
      typeColor: '#868c9c',
    })
    writer
  .type('')
  .removeCursor()
  .then(writer2.start.bind(writer2))
  .start()
    writer2
      .type(this.userprofile.identifiers[0].title)
      .rest(500)
      .clear()
      .type(this.userprofile.identifiers[1].title)
      .rest(500)
      .clear()
      .type(this.userprofile.identifiers[2].title)
      .rest(500)
      .clear()
      .then(writer.start.bind(writer));
  
  }

  ngOnInit(): void {
  }
}
