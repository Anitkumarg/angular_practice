import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
  // encapsulation: ViewEncapsulation.Emulated
})
export class ContainerComponent implements OnInit {

  @ViewChild('dobInput') dateOfBirth!: ElementRef;
  @ViewChild('ageInput') age!: ElementRef;
  @ViewChild(ProductsComponent, { static: true }) productComp!: ProductsComponent;

  constructor() { }

  ngOnInit(): void {
  }

  calculateAge(){
    let birthYear = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();
    let finalAge = currentYear - birthYear;
    this.age.nativeElement.value = finalAge;
  }

}
