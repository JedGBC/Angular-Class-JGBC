import { Component } from '@angular/core';
import { JuegosService } from '../servicios/juegos.service';

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.css']
})
export class ComponenteBComponent {
  constructor(private servicioJuegos:JuegosService){}

  ngOnInit(){
    console.log("Inicio del componente B - gatillador de actividades");
    this.obtenerJuegos();
  }

  obtenerJuegos(){
    console.log("Lista de Objetos: ",this.servicioJuegos.getData());

    for (let i = 0; i < this.servicioJuegos.getData().length; i++) {
      const element = this.servicioJuegos.getData()[i];
      console.log("Juego #",i,": ",element);
    }
  }
}
