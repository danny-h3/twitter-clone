import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() showBackArrow: boolean = false; 
  @Input() title: string = ""; 

  // Create a router to allow back arrow to navigate to previous view
  constructor(private router: Router) {}

  back(): void {
    this.router.navigate(['/']);
  }

  
}
