import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  showBanner = signal(true);

  toggleBanner() {
    this.showBanner.set(!this.showBanner());
  }
}
