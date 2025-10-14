import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css'
})
export class UserCard {

@Input() userName: string = '';
@Input() userEmail: string = '';
@Input() avatarUrl: string = '';

@Output() viewPerfil = new EventEmitter<string>();

OnviewPerfil(){
  this.viewPerfil.emit(this.userEmail);
} 
}
