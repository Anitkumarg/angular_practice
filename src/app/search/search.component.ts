import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchValue : string = ""; 
  @Output() searchTextChanged : EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onSearchChanged(){
    this.searchTextChanged.emit(this.searchValue);
  }

  // changeSearchValue(eventData: Event){
  //   this.searchValue = (<HTMLInputElement>eventData.target).value
  // }

  sayHello(data: HTMLInputElement){
    alert('Hi ' + data.value);
  }

}
