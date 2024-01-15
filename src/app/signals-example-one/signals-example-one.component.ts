import { Component, effect, signal } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-signals-example-one',
  templateUrl: './signals-example-one.component.html',
  styleUrls: ['./signals-example-one.component.css']
})
export class SignalsExampleOneComponent {

  // signal to hold quantity to show in template
  quantity = signal(1);
  // singal to itterate through the array in the template so user can select a new number
  qtyAvailable = signal([1, 2, 3, 4, 5, 6]);

  // signal that holds an object regarding product data on item
  selectedProduct = signal<Product>({
    id: 5,
    name: 'Hammer',
    price: 12
  })


  constructor(){
    console.log('In constructor: ', this.quantity());

    // An effect doesn't have a parameter so we use empty parentheses
    // An effect is scheduled to run any time its reference signals change
    // effect will only run when the lasted value of a signal is returned
    effect(() => console.log('In effect:', this.quantity()))

    this.quantity.update(q => q * 2);

  }

  onQuantitySelected(qty: number){
    this.quantity.set(qty);
  }



}
