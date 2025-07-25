FROM node:20-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia todo o projeto
COPY . .

# Expõe a porta do Vite
EXPOSE 5173

# Comando para rodar em modo dev
CMD ["npm", "run", "dev", "--", "--host"]