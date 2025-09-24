# Projeto CSS Modules

Este projeto utiliza **CSS Modules** para estilização de componentes React. O objetivo é mostrar como aplicar estilos encapsulados e evitar conflitos de classes usando arquivos CSS Modules.

## Tipo de Estilização

- **CSS Modules:**  
  Cada componente possui seu próprio arquivo `.module.css`, garantindo que os estilos sejam aplicados apenas ao componente correspondente.  
  Isso evita conflitos de nomes de classes e facilita a manutenção dos estilos.

## Organização das Pastas

```
src/
  App.jsx                   # Componente principal da aplicação
  index.css                 # Estilos globais e reset
  main.jsx                  # Ponto de entrada do React
  components/
    Button/
      Button.jsx            # Botão estilizado
      Button.module.css     # Estilos do botão (CSS Module)
    Navbar/
      Navbar.jsx            # Barra de navegação
      Navbar.module.css     # Estilos da navbar (CSS Module)
    ProductCard/
      ProductCard.jsx       # Card de produto
      ProductCard.module.css# Estilos do card (CSS Module)
    SkeletonCard/
      SkeletonCard.jsx      # Card de carregamento
      SkeletonCard.module.css# Estilos do skeleton (CSS Module)
    ThemeContext/
      ThemeContext.jsx      # Contexto para alternância de tema
  data/
    products.js             # Dados mockados dos produtos
  styles/
    main.css                # Estilos globais adicionais (opcional)
```

- **components/**: Componentes reutilizáveis, cada um com seu próprio CSS Module.
- **data/**: Dados mockados para uso nos componentes.
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