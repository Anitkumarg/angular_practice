import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productCountRadioButton: string = 'All';
  searchText : string = "";
  selectedProduct : any;

  constructor() { }

  ngOnInit(): void {
  }

  products : any = [
    {
      "image": "../assets/products/car.jpg",
      "name": "Creta",
      "color": "White",
      "price": "15 Lacks",
      "availability": "Available"
    },
    {
      "image": "../assets/products/laptop.jpg",
      "name": "Laptop",
      "color": "White",
      "price": "100000",
      "availability": "Not Available"
    },
    {
      "image": "../assets/products/cap.jpg",
      "name": "Cap",
      "color": "Black",
      "price": "500",
      "availability": "Available"
    },
    {
      "image": "../assets/products/shoe.jpg",
      "name": "Campus",
      "color": "Blue",
      "price": "2000",
      "availability": "Not Available"
    },
    {
      "image": "../assets/products/sweater.jpg",
      "name": "Sweater",
      "color": "Yellow",
      "price": "1000",
      "availability": "Available"
    },
    {
      "image": "../assets/products/watch.jpg",
      "name": "Rolax",
      "color": "white",
      "price": "10000",
      "availability": "Not Available"
    }
  ]

  getAllProduct(){
    return this.products.length
  }

  getAvailableProduct(){
    return this.products.filter((product: any) => product.availability === 'Available').length
  }

  getNotavailableProduct(){
    return this.products.filter((product: any) => product.availability === 'Not Available').length
  }

  onFilterRadioButtonChanged(data:string){
    this.productCountRadioButton = data;
    // console.log(this.productCountRadioButton);
  }

  onSearchTextEntered(seachValue: string){
    this.searchText = seachValue;
    // console.log(this.searchText);
  }

  randomFunc(){
    console.log('called from product component');
  }

}
