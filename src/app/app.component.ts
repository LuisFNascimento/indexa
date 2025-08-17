import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from "./componentes/container/container.component";
import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho.component";
import { SeparadorComponent } from "./componentes/separador/separador.component";
import { ContatoComponent } from './componentes/contato/contato.component';
import { FormsModule } from '@angular/forms';

interface Contato {
  id: number;
  nome: string;
  telefone: string;
}

import agenda from './agenda.json';
import { FormularioContatoComponent } from "./paginas/formulario-contato/formulario-contato.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent,
    FormsModule,
    FormularioContatoComponent
],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz'
  contatos: Contato[] = agenda;

  filtroPorTexto: string = ''

    removerAcentos(texto: string): string {
  return texto
    .normalize('NFD') // separa letras de acentos
    .replace(/[\u0300-\u036f]/g, '') // remove acentos
    .toLowerCase(); // padroniza
  }

  filtrarContatosPorTexto(): Contato[] {
    if (!this.filtroPorTexto.trim()) return this.contatos;

    const filtro = this.removerAcentos(this.filtroPorTexto);

    return this.contatos.filter(contato =>
      this.removerAcentos(contato.nome).includes(filtro)
    );
  }

filtrarContatosPorLetraInicial(letra: string): Contato[] {
  const contatosFiltrados = this.filtrarContatosPorTexto();
  const letraNormalizada = this.removerAcentos(letra);

  return contatosFiltrados.filter(contato =>
    this.removerAcentos(contato.nome).startsWith(letraNormalizada)
  );
}
}
