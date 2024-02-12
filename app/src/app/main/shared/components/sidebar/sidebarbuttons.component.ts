import { Component } from '@angular/core';
import { SidebarItems } from '../../../interface'; 

@Component({
  selector: 'app-sidebarbuttons',
  templateUrl: './sidebarbuttons.component.html',
  styleUrl: './sidebarbuttons.component.scss'
})

export class SidebarbuttonsComponent {
  items: Array<SidebarItems> = [
    {
      label: '',
      route: '/', 
      icon: '../../../../assets/icons/twitter.svg'
    },
    {
      label: 'Home',
      route: '/', 
      icon: '../../../../assets/icons/home.svg'
    },
    {
      label: 'Explore',
      route: '/explore',
      icon: '../../../../assets/icons/explore.svg'
    },
    {
      label: 'Notifications',
      route: '/notifications', 
      icon: '../../../../assets/icons/notification.svg'
    },
    {
      label: 'Messages',
      route: './messages',
      icon: '../../../../assets/icons/message.svg'
    },
    {
      label: 'Bookmarks',
      route: './bookmarks', 
      icon: '../../../../assets/icons/bookmark.svg', 
    },
    {
      label: 'Lists',
      route: './lists', 
      icon: '../../../../assets/icons/lists.svg', 
    },
    {
      label: 'Profile',
      route: './profile', 
      icon: '../../../../assets/icons/profile.svg', 
    },
    {
      label: 'More',
      route: './more', 
      icon: '../../../../assets/icons/more.svg', 
    }
  ]
}
