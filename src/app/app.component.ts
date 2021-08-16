import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ElementRef,
  ComponentFactory,
} from '@angular/core';
import { HostListener } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { ActionsComponent } from './actions/actions.component';
import * as data from 'src/assets/userprofile.json';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  userprofile = null;
  componentRef = null;
  componentRef2 = null;
  title = 'Mohit Bhole';
  theme = '';
  screenheight = 0;
  screenwidth = 0;

  @ViewChild('menucontainer', { read: ViewContainerRef }) entry!: ViewContainerRef;
  @ViewChild('actionscontainer', { read: ViewContainerRef }) entry2!: ViewContainerRef;
  constructor(
    private resolver: ComponentFactoryResolver
  ) {
    this.userprofile = data;
  }

  ngAfterViewInit() {
    this.createActionComponent();
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenheight = window.innerHeight;
    this.screenwidth = window.innerWidth;
    if (this.screenheight / this.screenwidth > 1.02) {
      if (!this.componentRef) {
        this.componentRef2.destroy();
        this.componentRef2 = null;
        this.createComponent();
      }
    } else {
      if (this.componentRef) {
        this.componentRef.destroy();
        this.createActionComponent();
        this.componentRef = null;
      }
    }
    //console.log(this.screenheight/this.screenwidth); //1.02
  }

  createComponent(): void {
    const factory = this.resolver.resolveComponentFactory(MenuComponent);
    this.componentRef = this.entry.createComponent(factory);
  }

  createActionComponent(): void {
    const factory = this.resolver.resolveComponentFactory(ActionsComponent);
    this.componentRef2 = this.entry2.createComponent(factory);
  }
}
