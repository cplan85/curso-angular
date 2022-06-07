import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isActive = true;
  isGreen = true;
  title = 'mi PrimerApp';
  public name = 'Carlos';
  public message = '';
  saludos = 'aqui esta mi saludo';

  save(e: Event) {
    console.log(e);
  }

  onKeyUp(e: KeyboardEvent) {
    if (e.keyCode === 13) {
      console.log('Enter fue presionado');
    }
  }
}
