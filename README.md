# 📒 Agenda de Contatos - Angular

Este é um projeto desenvolvido em **Angular**, que implementa uma **agenda de contatos** com as seguintes funcionalidades:

✅ Listagem de contatos em ordem alfabética  
✅ Busca por nome com normalização de acentos  
✅ Filtragem por letra inicial  
✅ Formulário para adicionar/editar contatos  
✅ Separação de componentes (container, cabeçalho, separador, contato, formulário)  
✅ Uso de **FormsModule** e **ReactiveFormsModule**

---

## 🚀 Tecnologias Utilizadas

- Angular 17+ (Standalone Components)
- TypeScript
- HTML5 / CSS3
- FormsModule & ReactiveFormsModule
- JSON como fonte de dados inicial

---

## 📂 Estrutura do Projeto

```
src/
 ├── app/
 │   ├── componentes/
 │   │   ├── cabecalho/
 │   │   ├── contato/
 │   │   ├── container/
 │   │   └── separador/
 │   │
 │   ├── paginas/
 │   │   └── formulario-contato/
 │   │
 │   ├── agenda.json
 │   ├── app.component.ts
 │   ├── app.component.html
 │   └── app.routes.ts
 │
 └── index.html
```

---

## 🖼️ Prints da Aplicação

### 📋 Lista de Contatos

Exemplo da tela inicial com **busca e separação alfabética**:

![Lista de Contatos](./docs/lista-contatos.png)

---

### 🔍 Filtro por Nome

Busca inteligente que ignora acentos e diferenciação de maiúsculas/minúsculas:

![Filtro de Contatos](./docs/filtro-contatos.png)

---

### 📝 Formulário de Contato

Formulário reativo para adicionar/editar informações do contato:

![Formulário de Contato](./docs/formulario-contato.png)

---

## ⚙️ Como Executar

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/agenda-angular.git
   ```

2. Acesse a pasta:

   ```bash
   cd agenda-angular
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   ng serve
   ```

5. Acesse no navegador:
   ```
   http://localhost:4200
   ```

---

## 📌 Melhorias Futuras

- [ ] Persistência de dados em API/Database
- [ ] Edição e exclusão de contatos
- [ ] Upload de foto para cada contato
- [ ] Exportação/importação da agenda

---

📌 Projeto desenvolvido para estudos em Angular e boas práticas de organização de componentes.
