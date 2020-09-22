import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  title = "Ürün Listesi";
  filterText = "";

  products: Product[] = [
    { id: 1, name: "Laptop", price: 2500, categoryId: 1, description: "Asus ZenBook Pro Office Programme", imageUrl: "https://images.unsplash.com/photo-1548611635-b6e7827d7d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" },
    { id: 2, name: "Mouse", price: 25, categoryId: 2, description: "A4 Tech Pro Office Programme", imageUrl: "https://images.unsplash.com/photo-1548611635-b6e7827d7d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" },
    { id: 3, name: "Laptop", price: 2500, categoryId: 3, description: "Asus ZenBook Pro Office Programme", imageUrl: "https://images.unsplash.com/photo-1548611635-b6e7827d7d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" },
    { id: 4, name: "Mouse", price: 25, categoryId: 4, description: "A4 Tech", imageUrl: "https://images.unsplash.com/photo-1548611635-b6e7827d7d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" },
    { id: 5, name: "Laptop", price: 2500, categoryId: 5, description: "Asus ZenBook", imageUrl: "https://images.unsplash.com/photo-1548611635-b6e7827d7d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" },
    { id: 6, name: "Mouse", price: 25, categoryId: 6, description: "A4 Tech", imageUrl: "https://images.unsplash.com/photo-1548611635-b6e7827d7d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" },

  ];


  ngOnInit(): void {
  }

}
