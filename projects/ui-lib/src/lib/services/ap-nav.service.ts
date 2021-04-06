import {Inject, Injectable} from '@angular/core';
import {AP_NAV_ITEMS} from './injection-tokens';

declare var window: any;

export interface ApNavItem {
  name: string;
  path: string;
  subItems?: ApNavItem[];
}

@Injectable()
export class ApNavService {
  constructor(@Inject(AP_NAV_ITEMS) public items: ApNavItem[]) {

  }

  get currentPage(): string {
    const path = window.location.pathname;
    return !!path ? path.split('/')[0] : null;
  }

  get subItems(): ApNavItem[] {
    if (!!this.items && !!this.currentPage) {
      const page = this.items.find(x => x.name === this.currentPage);
      if (!page) {
        return [];
      }

      return page.subItems;
    }

    return [];
  }
}
