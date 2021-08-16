import { Component, OnInit } from '@angular/core';
import { NbIconLibraries, NbMenuItem } from '@nebular/theme';
import { NbComponentSize } from '@nebular/theme';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  theme = '';
  size: NbComponentSize = 'medium';
  items: NbMenuItem[] = [
    {
      title: 'Menu',
      children: [
        {
          title: 'Home',
          icon: 'home',
          link: '/home',
        },
        {
          title: 'Projects',
          icon: 'list',
          link: '/projects',
        },
        {
          title: 'Resume',
          icon: 'file-text',
          link: '/resume',
        },
        {
          title: 'Contact',
          icon: 'person',
          link: '/contact',
        },
      ],
    },
  ];
  constructor(private readonly themeService: NbThemeService) {
    this.themeService.onThemeChange().subscribe((theme: any) => {
      this.theme = theme.name;
    });
  }
  themeSwitch() {
    if (this.theme == 'dark') {
      this.themeService.changeTheme('default');
    } else {
      this.themeService.changeTheme('dark');
    }
  }
  ngOnInit(): void {}
}
