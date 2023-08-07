import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() all: Number = 0;
  @Input() available: Number = 0;
  @Input() notAvailable: Number = 0;
  selectedRadioButtonvalue: string = 'All'; 
  @Output() filterRadioButtonSelectionChanged : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onRadioButtonSelectionChanged(){
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonvalue);
    // console.log(this.selectedRadioButtonvalue)
  }

}
