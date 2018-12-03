import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { AvatarListItemComponent } from './avatar-list-item.component';
import { AvatarListComponent } from './avatar-list.component';

const COMPONENTS = [AvatarListComponent, AvatarListItemComponent];

@NgModule({
  imports: [CommonModule, NgZorroAntdModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class AvatarListModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: AvatarListModule, providers: [] };
  }
}
