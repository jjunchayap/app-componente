import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCard } from "./components/user-card/user-card";

@Component({
  selector: 'app-root',
  imports: [UserCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('app-componente');

onViewPerfilClick(userEmail: string) {
  console.log(`user Profile Clicked: ${userEmail}`);
}
}
