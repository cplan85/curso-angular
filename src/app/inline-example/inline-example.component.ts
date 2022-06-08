import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  //THIS COMPONENT WAS CREATED WITH "ng g c inline-example -s -t"
  selector: 'app-inline-example',
  template: `
    <p>inline-example works! {{ parentData }}</p>
    <h3>CLICK BUTTON BELOW TO SEE EXAMPLE OF CHILD COMPONENT ADDING DATA TO PARENT</h3>
    <button (click)="fireEvent()">Send event</button>
  `,
  styles: [],
})
export class InlineExampleComponent implements OnInit {
  //you can use statement below
  @Input() public parentData = 'Default Name';
  @Output() public childEvent = new EventEmitter();
  //or create alias is in below.
  //@Input('parentData') public name;
  constructor() {}

  ngOnInit(): void {}

  fireEvent() {
    this.childEvent.emit('Hey this is Text from Child');
  }
}
