import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from "../../componentes/container/container.component";
import { CommonModule } from '@angular/common';
import { SeparadorComponent } from "../../componentes/separador/separador.component";
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ContatoService } from '../../services/contato.service';

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [
    ContainerComponent,
    CommonModule,
    SeparadorComponent,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})

export class FormularioContatoComponent implements OnInit {

  contatoForm!: FormGroup;

  constructor(
    private contatoService: ContatoService,
    private router : Router
  ) {}

ngOnInit(){
  this.inicializarFormulario();
}

inicializarFormulario(){this.contatoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      telefone: new FormControl('',[ Validators.required, Validators.minLength(8), Validators.maxLength(11), Validators.pattern('^[0-9]*$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl('')
    })
  }

    salvarContato() {
  const novoContato = this.contatoForm.value;

  const resultado = this.contatoService.salvarContato(novoContato);

  if (!resultado.sucesso) {
    alert(`Já existe um contato com esse ${resultado.erro}!`);
    return;
  }

  alert('Contato salvo com sucesso!');
  this.contatoForm.reset();
  this.router.navigate(['/lista-contatos']);
}
  cancelar(){
  this.contatoForm.reset();
  this.router.navigate(['/lista-contatos']);
  }
}
