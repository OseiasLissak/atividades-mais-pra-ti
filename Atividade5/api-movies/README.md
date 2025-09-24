# TOP Filmes - Aplicação React com API TMDB

<img width="1659" height="826" alt="image" src="https://github.com/user-attachments/assets/1aae8447-0d0b-4ee6-a56c-c40220e53da0" />

<img width="220" height="442" alt="image" src="https://github.com/user-attachments/assets/40e2a59b-4b16-45bb-9e90-fe56dba8e8da" />



Este projeto é uma aplicação web desenvolvida em React que permite buscar filmes, visualizar detalhes, favoritar e gerenciar uma lista de favoritos, consumindo dados da [API TMDB](https://www.themoviedb.org/).

## Deploy do Projeto
https://topfilms-api.netlify.app/

## Funcionalidades

- **Busca de Filmes:** Pesquise filmes pelo nome e visualize resultados com pôster, título e ano.
- **Detalhes do Filme:** Veja informações completas como diretor, elenco, sinopse, orçamento, receita, duração e avaliação.
- **Favoritos:** Adicione ou remova filmes da sua lista de favoritos, com persistência em `localStorage`.
- **Tratamento de Erros e Loading:** Indicadores de carregamento e mensagens de erro amigáveis.
- **Responsividade:** Layout adaptado para diferentes tamanhos de tela.

## Tecnologias Utilizadas

- [React](https://react.dev/) (v19)
- [Vite](https://vitejs.dev/) para bundling e desenvolvimento rápido
- [React Router DOM](https://reactrouter.com/) para navegação SPA
- [React Icons](https://react-icons.github.io/react-icons/) para ícones
- [TMDB API](https://developers.themoviedb.org/3) para dados dos filmes
- CSS customizado para estilização

## Como executar

1. Instale as dependências:
   ```sh
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```
3. Acesse [http://localhost:5173](http://localhost:5173) no navegador.

## Estrutura de Pastas

- `src/pages/` - Páginas principais e componentes
- `src/pages/components/` - Componentes reutilizáveis (Navbar, MovieCard, Contexto de Favoritos)
- `src/pages/Favorites.jsx` - Página de favoritos
- `src/pages/Home.jsx` - Página inicial (filmes mais bem avaliados)
- `src/pages/Search.jsx` - Página de busca
- `src/pages/Movie.jsx` - Página de detalhes do filme

## Observações

- A chave da API TMDB está definida diretamente nos arquivos de código, pois o projeto tem fins didáticos.

---
Projeto desenvolvido para a Atividade 5, Módulo Front End, +PraTi.
