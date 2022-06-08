import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isActive = true;
  isGreen = true;
  title = 'mi PrimerApp';

  person = {
    name: "Luis",
    age: 20,
  }
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

  onKeyUp2(user: string) {
 console.log("User is ", user);
  }
}
