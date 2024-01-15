import { Component, computed, effect, signal } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-signals-example-one',
  templateUrl: './signals-example-one.component.html',
  styleUrls: ['./signals-example-one.component.css']
})
export class SignalsExampleOneComponent {

  quantity = signal(1);
  qtyAvailable = signal([1, 2, 3, 4, 5, 6]);

  selectedProduct = signal<Product>({
    id: 5,
    name: 'Hammer',
    price: 12
  })

  // Don't forget to open the boxes
  // Computed using a function as a return, we use an arrow function and we don't pass 
  // anything so its just empty parenthesis.
  exPrice = computed(() => this.selectedProduct().price * this.quantity());
  color = computed(() => this.exPrice() > 50 ? 'green': 'blue')

  // Using a declarative approach to using effect function
  e = effect(() => console.log('In effect, price: ', this.exPrice()));


  constructor(){
    console.log('In constructor: ', this.quantity());
    effect(() => console.log('In effect:', this.quantity()))
    this.quantity.update(q => q * 2);
  }

  onQuantitySelected(qty: number){
    this.quantity.set(qty);
  }



}
