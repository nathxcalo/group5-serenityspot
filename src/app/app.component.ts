import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // Add RouterModule here
  template: `
    <nav class="navbar">
      <h1 class="logo">Serenity Spot</h1>
      <div class="nav-links">
        <a routerLink="/">Home</a>
        <a routerLink="/guides">Guides</a>
        <a routerLink="/hotlines">Hotlines</a>
      </div>
    </nav>

    <router-outlet></router-outlet>
  `,
  styles: [`
    .navbar { background-color: #0033a0; padding: 15px; display: flex; justify-content: space-between; align-items: center; }
    .logo { color: white; font-size: 24px; font-weight: bold; }
    .nav-links a { color: white; text-decoration: none; margin: 0 15px; font-size: 16px; }
  `]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
