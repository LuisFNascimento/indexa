import { Injectable } from '@angular/core';
import { Contato } from '../componentes/contato/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private contatos: Contato[] = [
    {"id": 2, "nome": "Ágata", "telefone": "38 128451235"},
    {"id": 3, "nome": "Bruno", "telefone": "95 695521583"},
    {"id": 18, "nome": "Isabela", "telefone": "81 103125769"},
    {"id": 19, "nome": "João", "telefone": "76 316563452"},
    {"id": 20, "nome": "Juliana", "telefone": "86 121042222"},
    {"id": 21, "nome": "Kleber", "telefone": "16 333519686"},
    {"id": 22, "nome": "Larissa", "telefone": "27 445878123"},
    {"id": 23, "nome": "Luiz", "telefone": "11 998745632"},
    {"id": 24, "nome": "Mariana", "telefone": "41 223344556"}
  ]

private contatoDuplicado(contato: Contato): string | null {
  const nomeExistente = this.contatos.some(c =>
    c.nome.toLowerCase() === contato.nome.toLowerCase()
  );
  if (nomeExistente) return 'nome';

  const telefoneExistente = this.contatos.some(c =>
    c.telefone === contato.telefone
  );
  if (telefoneExistente) return 'telefone';

  // Só verifica e-mail se o contato tiver e-mail preenchido
  const emailExistente = contato.email
    ? this.contatos.some(c =>
        c.email?.toLowerCase() === contato.email!.toLowerCase()
      )
    : false;

  if (emailExistente) return 'email';

  return null;
}


  constructor() {

    const contatosLocalStorageString = localStorage.getItem('contatos');

    if (contatosLocalStorageString) {
      // Se existir no localStorage, usa o valor salvo
      this.contatos = JSON.parse(contatosLocalStorageString);
    } else {
      // Se não existir, cria e salva os contatos iniciais
      localStorage.setItem('contatos', JSON.stringify(this.contatos));
    }

  }

  obterContatos() {
    return this.contatos;
  }

  salvarContato(contato: Contato): { sucesso: boolean; erro?: string } {

  const duplicado = this.contatoDuplicado(contato);

  if (duplicado) {
    return { sucesso: false, erro: duplicado };
  }

  // cria id incremental
  contato.id = this.contatos.length ? Math.max(...this.contatos.map(c => c.id)) + 1 : 1;

  this.contatos.push(contato);
  localStorage.setItem('contatos', JSON.stringify(this.contatos));

  return { sucesso: true };
}

}
