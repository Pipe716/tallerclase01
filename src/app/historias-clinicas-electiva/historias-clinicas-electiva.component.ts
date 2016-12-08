import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

import { Citas } from '../model/clinicas.model';

@Component({
  selector: 'historias-clinicas-electiva',
  templateUrl: './historias-clinicas-electiva.component.html',
  styleUrls: ['./historias-clinicas-electiva.component.css']
})
export class HistoriasClinicasElectivaComponent implements OnInit {

  private citaACrear:Citas;

  constructor(private http:Http) {
    this.citaACrear = new Citas();
   }

  ngOnInit() {
  }

  public guardarCita()
  {
    this.http.post(
      "http://natural1app.site88.net/Citas/citas.php",
      this.citaACrear
    ).subscribe((response)=>{
      let respuesta = response.json();
      if(respuesta.resultado == 1){
        alert('Cita guardada con éxito');
      }      
      else{
        alert("Hubo un error al guardar la cita");
      }
    });

  }

}
