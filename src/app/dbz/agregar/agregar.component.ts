import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  nuevo: Personaje = {

    nombre: '',
    poder: undefined,

  };

  agregar() {

    if (this.nuevo.nombre === '') { return }
    if (this.nuevo.poder === undefined) { return }

    this.dbzService.agregarNuevoPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: undefined,
    };

  };

  get personajes():Personaje[] {

    return this.dbzService.personajes;

  };

  constructor(private dbzService: DbzService) {

  };

};
