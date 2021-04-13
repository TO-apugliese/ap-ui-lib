import {ModuleWithProviders, NgModule} from '@angular/core';
import {ApNavbarComponent}             from './navbar.component';
import {CommonModule}                  from '@angular/common';
import {RouterModule} from '@angular/router';
import {AP_NAV_ITEMS} from '../../services/injection-tokens';
import {ApNavItem, ApNavService} from '../../services/ap-nav.service';

export function navServiceFactory(items: ApNavItem[]): ApNavService {
  return new ApNavService(items);
}

@NgModule({
  declarations: [ApNavbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ApNavbarComponent],
})
export class ApNavbarModule {
  static forRoot(items: ApNavItem[]): ModuleWithProviders<ApNavbarModule> {
    return {
      ngModule:  ApNavbarModule,
      providers: [
        {
          provide:  AP_NAV_ITEMS,
          useValue: items,
        },
        {
          provide: ApNavService,
          useFactory: navServiceFactory,
          deps: [AP_NAV_ITEMS],
        },
      ]
    };
  }
}

export * from './navbar.component';
