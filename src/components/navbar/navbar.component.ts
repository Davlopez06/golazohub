import { Component, Input } from '@angular/core';
import { NAV_ITEMS } from '../../utils/_constants';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() selectedItem: string = '';
  navItems: NavItems[] = NAV_ITEMS;

  handleClick(value: string) {
    this.selectedItem = value;
  }
}

export interface NavItems {
  name: string;
  url: string;
}
