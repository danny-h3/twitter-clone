import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './shared/components/sidebar.component';
import { SidebarButtonsComponent } from './shared/components/sidebarbuttons.component';

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    SidebarButtonsComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
