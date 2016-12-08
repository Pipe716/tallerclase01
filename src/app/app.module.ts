import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HistoriasClinicasElectivaComponent } from './historias-clinicas-electiva/historias-clinicas-electiva.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoriasClinicasElectivaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
