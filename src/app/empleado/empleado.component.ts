import { Component, OnInit } from '@angular/core';

@Component({
  //USING TEMPLATE AND STYLE, WE CAN CREATE AN INLINE COMPONENT, WHICH THEORETICALLY WOULD NOT NEED AN HTML AND CSS FILE TO ACCOMPANY TS FILE.
  selector: 'app-empleado',
  template: '<p>Aqui iria un empleado de template</p>',
  //templateUrl: './empleado.component.html',
  //styleUrls: ['./empleado.component.css']
  styles: ['p{background-color:red}']
})
export class EmpleadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
