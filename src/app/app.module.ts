import { EmpleadosComponent } from './empleados/empleados.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { InlineExampleComponent } from './inline-example/inline-example.component';

@NgModule({
  // THIS IS WHERE YOU INDICATE WHAT COMPONENTS YOU WILL BRING INTO YOUR FILE
  declarations: [
    AppComponent, EmpleadosComponent, EmpleadoComponent, InlineExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
