import { Component, EventEmitter,Output } from '@angular/core';
import { navbarData } from './nav-data';

interface SideNavToggle {
  screenWidth : number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent {

  @Output() onToggleSidenav: EventEmitter<SideNavToggle> = new EventEmitter();

  screenWidth = 0;

  collapsed = false;

  navData = navbarData;

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void {
    this.collapsed  = false;
    this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

}
