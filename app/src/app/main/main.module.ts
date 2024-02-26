import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { SidebarbuttonsComponent } from './shared/components/sidebar/sidebarbuttons.component';
import { ContentbarComponent } from './shared/components/contentbar/contentbar.component';
import { FollowbarComponent } from './shared/components/followbar/followbar.component';
import { PostbarComponent } from './shared/components/postbar/postbar.component';

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    SidebarbuttonsComponent,
    ContentbarComponent,
    FollowbarComponent,
    PostbarComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
