import { Component, OnInit } from '@angular/core';

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


}
