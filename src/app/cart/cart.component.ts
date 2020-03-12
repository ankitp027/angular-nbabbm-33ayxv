import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  itemPurchased;
  Name;
  Address;
  ShowOrderProcess;
  ShowForm;
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
   }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.ShowOrderProcess = false;
    this.ShowForm = this.items.length > 0;
  }

  onSubmit(customerData) {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    this.itemPurchased = 'Your order has been submitted';
    this.Name = customerData.name;
    this.Address = customerData.address;
    this.ShowOrderProcess = true;
  }

}