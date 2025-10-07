import { Component, Input, Output, EventEmitter } from '@angular/core';//EventEmitter: Es elobjeto que se envia  Output: Mensaje que se envia al componente padre

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {

@Input() productName: string = '';
@Input() price: number = 0;
@Input() description: string = '';

@Output() addToCard = new EventEmitter<string>(); // 

onADDToCard(){
  this.addToCard.emit(this.productName);

}
}
