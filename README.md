** 📖 Descrição
Aplicação simples de gerenciamento de clientes desenvolvida com React + Vite.
Permite criar, atualizar, excluir e selecionar clientes utilizando uma API paginada.
O gerenciamento de estado é feito com Zustand e as requisições com Axios utilizando interceptors.

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