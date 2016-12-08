import { Component } from '@angular/core';

import { Http } from '@angular/http';

import { Citas } from './model/clinicas.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
  citasList:Array<Citas> = new Array<Citas>();

  constructor(private http:Http){

  }

  listarCitas(){
    this.http
    .get("http://natural1app.site88.net/Citas/citas.php")
    .subscribe((response)=>{
      this.citasList = response.json();
      console.log(this.citasList);
      let listaCitas = document.getElementById("listaCitas");
    });            
  }

}
