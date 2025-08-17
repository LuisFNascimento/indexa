import { Component } from '@angular/core';
import { ContainerComponent } from "../../componentes/container/container.component";
import { CommonModule } from '@angular/common';
import { SeparadorComponent } from "../../componentes/separador/separador.component";
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [
    ContainerComponent,
    CommonModule,
    SeparadorComponent,
    ReactiveFormsModule
  ],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent {

  contatoForm!: FormGroup;

  constructor() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('Fernando'),
      telefone: new FormControl('21 99999-9999'),
      email: new FormControl('compras@gmail.com'),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl('Olá mundo!')
    })
  }
    salvarContato() {
      console.log(this.contatoForm.value);

  }

  cancelar(){
  console.log('Submissão cancelada');
}
}
