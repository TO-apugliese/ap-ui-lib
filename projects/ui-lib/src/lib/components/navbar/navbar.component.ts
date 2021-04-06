import {Component, Input} from '@angular/core';
import {ApNavItem, ApNavService} from '../../services/ap-nav.service';

@Component({
  selector: 'ap-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  constructor(public navSrv: ApNavService) {}
}
