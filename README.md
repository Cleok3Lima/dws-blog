# DWS Blog - Frontend Challenge

Este projeto é a solução do desafio técnico de frontend para a Dentsu World
Services (DWS). O objetivo é desenvolver um blog com layout responsivo,
utilizando React, respeitando o design fornecido, com foco em boas práticas de
código e gerenciamento de estado.

## Tecnologias utilizadas

- **React 19** com **Vite**
- **TypeScript**
- **SCSS (SASS)**
- **FontAwesome**
- **Gerenciamento de estado** com `useState` e prop drilling
- **Responsividade** com abordagem **mobile-first**
- **Organização de componentes reutilizáveis**

---

## Funcionalidades implementadas

- Página inicial com **lista de posts**
- Página de **detalhes de um post**
- **Filtro por autor**
- **Filtro por categoria**
- Filtros combináveis (autor + categoria)
- Filtros responsivos:
  > **Mobile:** dropdown customizado com ícones de abertura/fechamento
  > **Desktop:** sidebar clicável
- Comportamento de seleção e **deseleção** dos filtros
- Destaque de filtro selecionado
- Estilização com SCSS e sem bibliotecas como Tailwind ou Material UI
- Ícones reativos com FontAwesome
- Tratamento de clique fora do dropdown

---

## Estrutura de pastas

```
src/
│
├── assets/               # Imagens e ícones
├── components/           # Componentes reutilizáveis
│   ├── DropdownComponent/ # Dropdown customizado
│   ├── Filters/
│   │   ├── DropdownFilter/
│   │   ├── SidebarFilter/
│   └── PostCard/         # Card de post
│
├── pages/
│   ├── Home/             # Página inicial com lista de posts e filtros
│   └── PostDetails/
│
├── styles/               # Variáveis e estilos globais (SCSS)
└── App.tsx               # Componente principal
```

---

## API utilizada

Todos os dados são consumidos a partir dos seguintes endpoints fornecidos no
teste:

- **Posts:**

  - `GET https://tech-test-backend.dwsbrazil.io/posts`
  - `GET https://tech-test-backend.dwsbrazil.io/posts/{id}`

- **Authors:**

  - `GET https://tech-test-backend.dwsbrazil.io/authors`
  - `GET https://tech-test-backend.dwsbrazil.io/authors/{id}`

- **Categories:**

  - `GET https://tech-test-backend.dwsbrazil.io/categories`
  - `GET https://tech-test-backend.dwsbrazil.io/categories/{id}`

---

## 🧠 Decisões técnicas

- O projeto é **mobile-first**, e os componentes se adaptam dinamicamente ao
  tamanho da tela.
- Para os filtros, preferi construir um **dropdown 100% customizado**, para
  controlar visibilidade e comportamento visual com total liberdade.
- O **estado dos filtros** é armazenado no componente pai (`Home`) e propagado
  para os filhos, possibilitando consistência e controle sobre os dados
  exibidos.
- Houve alguns erros de interpretação do PDF os quais deixei em comentário no
  código do componente `src/components/PostCard/index.tsx`
- Deixei o search por último e por isso não se encontra no projeto.

---

## Como rodar o projeto

### Pré-requisitos

- Node.js (v20 ou superior)
- npm (v10 ou superior)

### Instalação e execução

```bash
# Instalar dependências
npm install

# Rodar o projeto localmente
npm run dev
```
