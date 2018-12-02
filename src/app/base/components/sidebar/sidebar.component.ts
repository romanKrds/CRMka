import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  navigationItems = [
    {
      link: '/orders',
      text: 'Все заявки',
      icon: 'shopping_cart'
    },
    {
      link: '/clients',
      text: 'Клиенты',
      icon: 'people'
    },
    {
      link: '/settings',
      text: 'Настройки',
      icon: 'settings'
    }
  ];

  account = {
    link: 'account',
    text: 'Ваш аккаунт',
    icon: 'account_circle'
  };

  small: boolean;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.Medium,
      Breakpoints.Large
    ]).subscribe(result => {
      if (result.matches) {
        this.small = false;
      } else {
        this.small = true;
      }

    });
   }

  ngOnInit() {

  }

  onResizeSidebar() {
    this.small = !this.small;
  }
}
