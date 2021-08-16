import { Component, OnInit } from '@angular/core';
import { NbIconLibraries, NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items: NbMenuItem[] = [
    {
      title: 'Menu',
      children: [
        {
          title: 'Home',
          icon: 'home',
          link: '/home'
        },
        {
          title: 'Projects',
          icon: 'list',
          link: '/projects'
        },
        {
          title: 'Resume',
          icon: 'file-text',
          link: '/resume'
        },
        {
          title:'Contact',
          icon: 'person',
          link: '/contact'
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
