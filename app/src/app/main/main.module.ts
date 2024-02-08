import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './shared/components/sidebar.component';
import { SidebarButtonsComponent } from './shared/components/sidebarbuttons.component';
import { HeaderComponent } from './shared/components/header.component';
import { FollowbarComponent } from './shared/components/followbar.component';
import { AvatarComponent } from './shared/components/avatar.component';

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    SidebarButtonsComponent,
    HeaderComponent,
    FollowbarComponent,
    AvatarComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
