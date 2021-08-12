import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory,
} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { NbComponentSize } from '@nebular/theme';
import { HostListener } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  size: NbComponentSize = 'medium';
  title = 'Mohit Bhole';
  theme = '';
  screenheight = 0;
  screenwidth = 0;
  constructor(private readonly themeService: NbThemeService) {
    this.themeService.onThemeChange().subscribe((theme: any) => {
      this.theme = theme.name;
    });
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenheight = window.innerHeight;
    this.screenwidth = window.innerWidth;
    //console.log(this.screenheight/this.screenwidth); //1.125
  }

  themeSwitch() {
    if (this.theme == 'dark') {
      this.themeService.changeTheme('default');
    } else {
      this.themeService.changeTheme('dark');
    }
  }
}
