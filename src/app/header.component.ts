import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    standalone: true,
    imports: [],
    styleUrl: './header.component.css',
})
export class HeaderComponent {
  title = 'My Angular App';
  subtitle = 'Welcome to my app!';

  constructor() {
    // Initialization logic can go here
  }

  // Method to change the title
  changeTitle(newTitle: string) {
    this.title = newTitle;
  }
}