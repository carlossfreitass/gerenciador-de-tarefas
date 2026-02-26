![Gerenciador de Tarefas](https://i.ibb.co/rGCj6hWH/github-header-banner.png)
<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=nodejs,nest,react,vite,python,flask,postgres,prisma,docker" />
  </a>
</p>

## Objetivo
Desenvolver uma aplicação simples de gerenciamento de tarefas utilizando:
- **Backend:** Node.js + NestJS  
- **Frontend:** React ( utilizando Vite )
- **Service:** Microsserviço em Python para sugestão de título de tarefas
- **Banco de Dados:** PostgreSQL
- **Infraestrutura**: Docker + Docker Compose

---

## Estrutura de Pastas
    ├── backend/      → API RESTful (Node.js + NestJS + Postgres)
    ├── frontend/     → Aplicação Web (Vite + React + TypeScript)
    └── services/     → Microsserviço em Python

---

## Guia de como baixar e executar o Gerenciador de Tarefas em ambiente de desenvolvimento
## Etapas
1. Instalar as ferramentas necessárias
2. Clonar o repositório
3. Executar o projeto em ambiente de desenvolvimento
4. Acessar o sistema
5. Finalizar o uso

---

## 1. Instalação de ferramentas
Para executar o projeto, é necessário ter instalado:

* Docker

O Docker é utilizado para containerizar toda a aplicação, incluindo backend, frontend, banco de dados, microsserviço e IA.

Para realizar sua instalação, acesse o site oficial do [Docker Desktop](https://www.docker.com/).

> O Docker Compose já vem incluído no Docker Desktop.

* Node.js

O Node.js é utilizado exclusivamente para a execução de scripts npm, que facilitam a inicialização e o controle do ambiente Docker.

Para realizar sua instalação, acesse o site oficial do [Node](https://nodejs.org/pt-br/download).

* Git

O Git é utilizado para clonar o repositório do projeto. Para realizar sua instalação, acesso o site oficial do [Git](https://git-scm.com/install/windows).

## 2. Clonar repositório do sistema
Todo o código fonte do Gerenciador de Tarefas encontra-se disponível aqui no GitHub. Para baixá-lo em seu computador, siga os passos a seguir:

1. Clone o repositório `gerenciador-de-tarefas`, isso pode ser feito pelo Git Bash utilizando o comando
```
git clone https://github.com/carlossfreitass/gerenciador-de-tarefas.git
```

## 3. Executando o projeto em ambiente de desenvolvimento
Após clonar o repositório, execute os comandos abaixos **na raiz do projeto** `gerenciador-de-tarefas`.

1. Subir todos os containers

> Este comando inicializa os containers Docker necessários para a aplicação. Para funcionamento do próprio, é obrigatório que o `Docker Desktop` esteja aberto.

```
npm run docker:up
```

2. Baixar o modelo de IA (apenas na primeira execução)

> Após os containers estarem em execução, execute:

```
npm run ai:pull
```

> Este comando deve ser executado apenas uma vez. O modelo de IA é armazenado em volume Docker e não será baixado novamente.

3. Configuração das Variáveis de Ambiente

> Para que o backend consiga se comunicar com o banco de dados, você deve configurar as credenciais de acesso localmente.

> Na pasta backend, crie um arquivo chamado `.env`.

> Utilize o seguinte modelo, substituindo pelos valores definidos em `docker-compose.yml`.

```
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
```

4. Iniciar o Prisma (apenas na primeira execução)

> Este comando configura o Prisma ORM, gera o Client para integração com o banco de dados e aplica migrações iniciais.

```
npm run prisma:setup
```

## 4. Acessar o Gerenciador de Tarefas

Após a execução do projeto, basta acessar http://localhost:5173 e você poderá utilizar o gerenciador de tarefas.

## 5. Finalizar o uso do Gerenciador de Tarefas

Para encerrar a aplicação e desligar os containers, execute:

```
npm run docker:down
```

> Este comando não remove os volumes. Para remover também o banco de dados e o modelo de IA, utilize:

```
docker compose down -v
```