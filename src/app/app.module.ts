import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DebugComponent } from './debug/debug.component';
import { HttpClientModule } from '@angular/common/http';
import { EstadosService } from './service/estados.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, DebugComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [EstadosService]
})
export class AppModule { }
