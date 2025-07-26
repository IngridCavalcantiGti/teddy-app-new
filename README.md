## 📖 Descrição

Aplicação simples de gerenciamento de clientes desenvolvida com React + Vite.
Permite criar, atualizar, excluir e selecionar clientes utilizando uma API paginada.
O gerenciamento de estado é feito com Zustand e as requisições com Axios utilizando interceptors.

## 🌐 Preview

- 🔗 **Aplicação Online:** [App](https://teddy-app-new.vercel.app)
- 📚 **Docs:** [Storybook](https://teddy-app-new-storybook.vercel.app/)


## ✅ Requisitos Atendidos

- [x] Utilização de **TypeScript**
- [x] Utilização de **React + Vite** (versão mais recente)
- [ ] Arquitetura microfrontends
- [x] Aplicação responsiva
- [x] Utilização de Docker para containerizar a aplicação
- [x] Deploy feito na **Vercel**
- [x] Inclusão de melhorias (refatoração, organização, boas práticas)
- [x] Criação do **README** com instruções
- [x] Criação de um vídeo demonstrando toda a aplicação

## 🔧 Melhorias Extras

As melhorias abaixo não estavam nos requisitos originais, foram adicionadas para aumentar a qualidade do projeto:

- [x] Configuração de Prettier para padronização de código.
- [x] Integração de ESLint com Prettier para lint e formatação automáticos.
- [x] Criação de pipeline de lint para manter padrão de código.
- [x] Criação de pipeline de testes unitários com Jest/Vitest.
- [x] Configuração de VSCode para formatar automaticamente ao salvar.
- [x] Configuração de Storybook para documentar e visualizar os componentes isoladamente.
- [x] Deploy do Storybook na Vercel.

## 🚀 Melhorias Futuras

- [ ] Implementar **autenticação e autorização** para gerenciar acessos.
- [ ] Adicionar **testes de integração e e2e** (ex.: Cypress/Playwright).
- [ ] Criar **tema dark/light** e suporte a customização de UI.
- [ ] Integrar **CI/CD completo** com deploy automático na Vercel apenas se todos os testes e lint passarem.

## 🛠️ Tecnologias

- React
- Vite
- TypeScript
- Zustand
- Yup
- Tailwind
- Axios
- React Router

## 🚀 Como Rodar o Projeto

### 🔹 Localmente (sem Docker)

1. **Clone o repositório:**

```bash
git clone https://github.com/IngridCavalcantiGti/teddy-app-new
cd teddy-app-new
```

2. Instalar dependências:

```bash
npm install
```

3. Rode o app:

```bash
npm run dev
```

4. Acesse no navegador:

```bash
http://localhost:5173
```

### 🔹 Com Docker

1. **Clone o repositório:**

```bash
git clone https://github.com/IngridCavalcantiGti/teddy-app-new
cd teddy-app-new
```

2. Build da imagem Docker:

```bash
docker build -t teddy-app .
```

2. Rodar o container:

```bash
docker run -p 5173:5173 teddy-app
```

3. Acesse no navegador:

```bash
http://localhost:5173
```

## 🧪 Testes e Lint

- Rodar lint:

```bash
npm run lint
```

- Corrigir lint automaticamente:

```bash
npm run lint:fix
```

- Rodar testes unitários:

```bash
npm run test
```
