import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 1500,
    },
    {
      nombre: 'Vegeta',
      poder: 1200,
    }
  ];

  get personajes(): Personaje[] {

    let personajes = localStorage.getItem('personajes');
    if (personajes){
      let lisPer: Personaje[] = JSON.parse(personajes);
      this._personajes = lisPer;
    }



    return this._personajes;

  }

  agregarNuevoPersonaje( personaje: Personaje ) {

    this._personajes.push(personaje);

    localStorage.setItem('personajes', JSON.stringify(this._personajes));

  }

  eliminarPersonajes() {

    console.log('limpiar');

    localStorage.removeItem('personajes');

    this._personajes = [];

    this.personajes;

  }

  constructor() {

    console.log('Servicio inicializado');

  };

};
