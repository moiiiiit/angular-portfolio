import { Component, OnInit, ViewChild } from '@angular/core';
import * as data from 'src/assets/userprofile.json';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('tw') typewriterElement;
  @ViewChild('tw2') typewriterElement2;

  userprofile = null;
  logos = []
  constructor() {
    this.userprofile = data;
    for(let i=1; i<=this.userprofile.numskilllogos; i++){
      this.logos.push("/assets/skilllogos/"+i.toString()+".png");
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
