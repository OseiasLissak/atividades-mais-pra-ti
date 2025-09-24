# Projeto CSS Global

Este projeto utiliza **CSS Global** para estilização de componentes React. O objetivo é mostrar como aplicar estilos globais em toda a aplicação usando arquivos CSS tradicionais.

## Tipo de Estilização

- **CSS Global:**  
  Os estilos são definidos em arquivos `.css` globais, como `App.css` e `styles/main.css`.  
  As classes CSS são aplicadas diretamente nos componentes via atributo `className`.

## Organização das Pastas

```
src/
  App.jsx           # Componente principal da aplicação
  App.css           # Estilos globais principais
  main.jsx          # Ponto de entrada do React
  components/
    Button/
      Button.jsx    # Botão estilizado com classes globais
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
    main.css        # Estilos globais adicionais
```

- **components/**: Componentes reutilizáveis, estilizados com classes globais.
- **data/**: Dados mockados para uso nos componentes.
- **styles/**: Estilos globais adicionais.

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