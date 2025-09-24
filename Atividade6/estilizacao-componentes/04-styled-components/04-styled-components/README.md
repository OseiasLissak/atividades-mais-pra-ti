# Projeto Styled Components

Este projeto demonstra o uso de **Styled Components** para estilização de componentes React. O objetivo é mostrar como aplicar estilos dinâmicos e reutilizáveis utilizando a biblioteca `styled-components`.

## Tipo de Estilização

- **Styled Components:**  
  Todos os estilos dos componentes são criados usando a biblioteca [`styled-components`](https://styled-components.com/).  
  Isso permite escrever CSS diretamente dentro dos arquivos JavaScript, criando componentes estilizados e dinâmicos.

## Organização das Pastas

```
src/
  App.jsx           # Componente principal da aplicação
  App.css           # Estilos globais (se necessário)
  main.jsx          # Ponto de entrada do React
  components/
    Button/
      Button.jsx    # Botão estilizado com styled-components
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

- **components/**: Contém todos os componentes reutilizáveis, cada um em sua própria pasta.
- **data/**: Arquivos de dados mockados para uso nos componentes.
- **styles/**: Estilos globais opcionais.

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