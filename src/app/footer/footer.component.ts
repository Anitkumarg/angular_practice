import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<div class="alert alert-success text-center mt-2 p-1" [hidden]="displayFooter">
                <p>This website uses cookies to privide better user experience.</p>
                <div class="close"><button type="button" class="btn btn-danger" (click)=closeFooter()>x</button></div>
            </div>`,
  styles: ["p{font-size: 14px}", ".close{float:right ; margin-top: -38px}"]
})
export class FooterComponent implements OnInit {

  displayFooter : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  closeFooter(){
    this.displayFooter = true;
  }

}
