import { Component, Input } from '@angular/core';

@Component({
  selector: 'Avatar',
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  @Input() userId: string = "12340";
  @Input() isLarge: boolean = false; 
  @Input() hasBorder: boolean = false; 
} 
