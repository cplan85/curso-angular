import { Component, OnInit } from '@angular/core';

@Component({
  //THIS COMPONENT WAS CREATED WITH "ng g c inline-example -s -t" 
  selector: 'app-inline-example',
  template: `
    <p>
      inline-example works!
    </p>
  `,
  styles: [
  ]
})
export class InlineExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
