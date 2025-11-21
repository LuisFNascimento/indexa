import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from "../../componentes/container/container.component";
import { CabecalhoComponent } from "../../componentes/cabecalho/cabecalho.component";
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ContatoComponent } from '../../componentes/contato/contato.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { FormularioContatoComponent } from '../formulario-contato/formulario-contato.component';
import { ContatoService } from '../../services/contato.service';
import { Contato } from '../../componentes/contato/contato';

@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SeparadorComponent,
    ContainerComponent,
    ContatoComponent,
    FormularioContatoComponent,
    FormsModule,
    CabecalhoComponent,
    RouterLink

],
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.css'
})
export class ListaContatosComponent implements OnInit {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contato[] = [];

  filtroPorTexto: string = '';

  constructor(private contatoService: ContatoService) {}

  ngOnInit() {
    this.contatos = this.contatoService.obterContatos();
  }

  removerAcentos(texto: string): string {
    return texto
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
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
