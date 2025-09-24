# Projeto Tailwind CSS

Este projeto utiliza **Tailwind CSS** para estilização de componentes React. O objetivo é demonstrar como aplicar estilos utilitários e responsivos de forma rápida e eficiente usando Tailwind.

## Tipo de Estilização

- **Tailwind CSS:**  
  Todos os estilos dos componentes são aplicados usando classes utilitárias do [Tailwind CSS](https://tailwindcss.com/).  
  Isso permite criar interfaces modernas e responsivas diretamente nos arquivos JSX, sem a necessidade de arquivos CSS separados para cada componente.

## Organização das Pastas

```
src/
  App.jsx           # Componente principal da aplicação
  App.css           # Estilos globais (se necessário)
  index.css         # Importação do Tailwind e estilos globais
  main.jsx          # Ponto de entrada do React
  assets/           # Imagens e outros arquivos estáticos
  components/
    Button/
      Button.jsx    # Botão estilizado com classes Tailwind
    Navbar/
      Navbar.jsx    # Barra de navegação estilizada
    ProductCard/
      ProductCard.jsx # Card de produto estilizado
    SkeletonCard/
      SkeletonCard.jsx # Card de carregamento estilizado
    ThemeContext/
      ThemeContext.jsx # Contexto para alternância de tema (dark/light)
  data/
    products.js     # Dados mockados dos produtos
  styles/
    main.css        # Estilos globais adicionais (opcional)
```

- **components/**: Componentes reutilizáveis, cada um em sua própria pasta.
- **data/**: Dados mockados para uso nos componentes.
- **styles/**: Estilos globais opcionais.
- **assets/**: Arquivos estáticos (imagens, ícones, etc).

## Como Executar o Projeto

1. **Instale as dependências:**

   ```bash
   npm install
   ```

2. **Execute o projeto em modo de desenvolvimento:**

   ```bash
   npm run dev
   ```

3. **Acesse no navegador:**

   Abra [http://localhost:5173](http://localhost:5173) para visualizar a aplicação.

---

**Observação:**  
Certifique-se de que o Node.js e o npm estão instalados em sua máquina.

---