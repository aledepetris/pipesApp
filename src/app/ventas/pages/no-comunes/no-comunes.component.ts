import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Fernando';
  genero: string = 'M';

  invitacionMap = {
    'M': 'invitarlo',
    'F': 'invitarla'
  }

  // i18nplural
  clientes: string[] = ['Maria', 'Pedro', 'German', 'Jose', 'Ale'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes espernado'
  }


  cambiarPersona() {
    if (this.genero == 'M') {
      this.nombre = 'Graciela';
      this.genero = 'F'
    } else {
      this.nombre = 'Fernando';
      this.genero = 'M'
    }
  }

  borrarCliente() {
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Alejandro',
    edad: 31,
    direccion: 'Rosario, Argentina'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Robin',
      vuela: false
    },
  ]

  // Async Pipe
  miObservable = interval( 1000 ); // 0,1,2,3,4,5,6...

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data de promesa');
    }, 3500 );
  });

}
