# 🗃️ Dados

Esta pasta contém os arquivos de dados estáticos utilizados para alimentar
os componentes e páginas da aplicação Beauty Collective Cosmetics.

## Arquivos presentes:

- **dadosContato.js** → Informações de contato da loja (endereço, telefone,
  e-mail, redes sociais)
- **dadosProdutos.js** → Lista completa de produtos com nome, preço,
  descrição e imagem
- **dadosPromocoes.js** → Dados das promoções ativas com desconto,
  validade e produtos relacionados

## Como esses arquivos funcionam:

Os arquivos desta pasta exportam arrays ou objetos JavaScript que são
importados diretamente nos componentes e páginas, por exemplo:

```js
import { produtos } from '../dados/dadosProdutos'
import { promocoes } from '../dados/dadosPromocoes'
import { contato } from '../dados/dadosContato'
```

## Observação:

Estes são dados estáticos (mockados). Em uma versão futura, podem ser
substituídos por chamadas a uma API ou banco de dados real.