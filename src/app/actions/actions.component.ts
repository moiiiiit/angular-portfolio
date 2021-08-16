import { Component, OnInit } from '@angular/core';
import { NbComponentSize } from '@nebular/theme';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class ActionsComponent implements OnInit {
  theme = '';
  size: NbComponentSize = 'medium';
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
