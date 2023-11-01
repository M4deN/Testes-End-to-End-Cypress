# End-to-end Testing with Cypress

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/M4deN/Testes-End-to-End-Cypress/ci.yml?label=Test%20Workflows&logo=Cypress&style=for-the-badge)

Projeto de exemplo para demonstrar testes end-to-end (e2e) escritos com [Cypress](https://cypress.io) em execução no GitHub Actions.

## Pré requisitos

Para clonar e executar este projeto:

- [git](https://git-scm.com/downloads) (Versão `2.34.1`)
- [Node.js](https://nodejs.org/en/) (Versão `v18.15.0`)
- npm (Versão `9.5.0`)

**Observação:** Ao instalar o Node.js, o npm é instalado automaticamente. 🚀

## Instalação

Para instalar as dependências de desenvolvimento, execute `npm install` (ou `npm i`).

## Configurando as variáveis ​​de ambiente

Antes de executar os testes, algumas variáveis ​​de ambiente precisam ser configuradas.

Faça uma cópia do arquivo [`cypress.env.example.json`](./cypress.env.example.json) como `cypress.env.json` e defina os valores apropriados para todas as variáveis.

**Nota:** O arquivo `cypress.env.json` não é rastreado pelo git, pois está listado no arquivo `.gitignore`.

## Executando os testes

Neste projeto, você pode executar testes nos modos interativo e headless, tanto em viewports de desktop quanto de tablets.

### Modo Headless

Execute `npm test` (ou `npm t`) para executar todos os testes no modo headless usando uma janela de visualização de desktop.

Execute `npm run test:tablet` para executar os testes apropriados no modo headless usando uma janela de visualização de tablet.

### Modo interativo

Execute `npm run cy:open` para abrir o __Cypress App__ para executar testes em modo interativo usando uma janela de visualização de desktop.

Execute `npm run cy:open:tablet` para abrir o __Cypress App__ para executar testes em modo interativo usando uma janela de visualização de tablet.

___

#### Exemplo

Aqui está um exemplo de execução de todos os testes no modo interativo.

#### authenticated.cy.js

https://github.com/M4deN/Testes-End-to-End-Cypress/assets/43422425/64625b37-283d-44ae-a63e-713d5bc8fda7

#### login.cy.js

https://github.com/M4deN/Testes-End-to-End-Cypress/assets/43422425/b3602f1d-e838-456b-95fe-73cfd5ed7644


#### signup.cy.js

https://github.com/M4deN/Testes-End-to-End-Cypress/assets/43422425/22f85892-0999-47ac-ab5a-d3462ce6d65f

___

Made with by [Alecio L. Medeiros](https://github.com/M4deN).

---

## Licença

Este projeto está sob a licença MIT - [LICENSE](LICENSE).
