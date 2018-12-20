import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {

  small: boolean;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.Large])
      .subscribe(result => {
        if (result.matches) {
          this.small = false;
        } else {
          this.small = true;
        }
      });
  }

  onResizeSidebar() {
    this.small = !this.small;
  }
}
