# GameVault

GameVault é um aplicativo mobile desenvolvido em React Native com Expo para explorar, favoritar e cadastrar jogos eletrônicos.

## Funcionalidades

- Visualizar uma lista de jogos
- Acessar os detalhes de um jogo
- Cadastrar um novo jogo
- Navegar entre diferentes telas
- Utilizar componentes reutilizáveis (`GameCard`)
- Trabalhar com imagens de capa
- Utilizar formulários controlados
- Utilizar listas dinâmicas
- Utilizar parâmetros de navegação
- Utilizar `useState` para gerenciamento dos dados dos formulários
- Utilizar `FlatList` para apresentação das listas

## Tecnologias utilizadas

- React Native
- Expo
- Expo Router
- JavaScript / TypeScript

## Estrutura principal do projeto

```bash
gamevault_app/
├── app/
│   ├── _layout.tsx
│   ├── adicionar_item.tsx
│   ├── detalhes_item.tsx
│   ├── index.tsx
│   └── item_favorito.tsx
├── assets/
│   └── styles/
│       ├── adicionar_item.styles.js
│       ├── detalhes_item.styles.js
│       ├── GameCard.styles.js
│       ├── index.styles.js
│       ├── item_favorito.styles.js
│       └── layout.styles.js
├── components/
│   └── GameCard.js
├── App.js
├── app.json
├── index.js
├── package.json
├── tsconfig.json
├── README.md
└── LICENSE
```

## Como executar localmente

1. Acesse a pasta do projeto:

```bash
cd Yomix
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o aplicativo:

```bash
npx expo start
```

4. Abra no emulador ou no aplicativo Expo Go.

## Observações

O app inclui uma coleção inicial de jogos com imagens de capa, lista dinâmica, cadastro de novos títulos e funcionalidade de favoritos. O estado dos dados é gerenciado com React e os itens são exibidos por meio de listas em telas diferentes.
