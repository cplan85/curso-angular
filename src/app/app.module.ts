import { EmpleadosComponent } from './empleados/empleados.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
