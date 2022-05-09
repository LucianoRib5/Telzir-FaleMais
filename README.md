### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Instruções gerais

```bash
# Clone este repositório
$ git clone <https://github.com/LucianoRib5/Telzir-FaleMais.git>
```

### 🎲 Rodando o Back End (servidor)

```bash
# Acesse a pasta do projeto no terminal/cmd
$ cd Telzir-FaleMais

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install

# Crie um arquivo .env com as seguintes informações temporárias:
DB_HOST = "telzirfalemais.ccwjtyuxmvpr.sa-east-1.rds.amazonaws.com"
DB_USER = "admin"
DB_PASSWORD = "telzir123456"
DB_SCHEMA = "telzir-fale-mais"

# Execute o script migrations
$ npm run migrations

# Execute o script dev
$ npm run dev

# O servidor iniciará na porta:3003 - acesse <http://localhost:3003>
```

### 🖥️ Rodando o Front end

```bash
# Acesse a pasta do projeto no terminal/cmd
$ cd Telzir-FaleMais

# Vá para a pasta server
$ cd client

# Instale as dependências
$ npm install

# Execute o script start
$ npm start
```

