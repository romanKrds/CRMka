import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Input() small: boolean;

  navigationItems = [
    {
      link: 'orders',
      text: 'Все заявки',
      icon: 'shopping_cart'
    },
    {
      link: 'clients',
      text: 'Клиенты',
      icon: 'people'
    },
    {
      link: 'settings',
      text: 'Настройки',
      icon: 'settings'
    }
  ];

  account = {
    link: 'account',
    text: 'Ваш аккаунт',
    icon: 'account_circle'
  };

}
