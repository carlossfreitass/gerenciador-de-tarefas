# Desafio Técnico | Gerenciador de Tarefas

## Objetivo
Desenvolver uma aplicação simples de gerenciamento de tarefas utilizando:
- **Backend:** Node.js + NestJS  
- **Frontend:** React ( utilizando Vite )  

---

## Estrutura de Pastas
    ├── backend/      → API RESTful (Node.js + NestJS + Postgres)
    ├── frontend/     → Aplicação Web (Vite + React + TypeScript)

---

## Guia de como baixar e executar o Gerenciador de Tarefas em ambiente de desenvolvimento
## Etapas
1. Instalar as ferramentas necessárias
2. Clonar o repositório
3. Executar o projeto em ambiente de desenvolvimento
4. Acessar o Gerenciador de Tarefas
5. Finalização do uso do Gerenciador de Tarefas

---

## 1. Instalação de ferramentas
Utilizamos algumas tecnologias no desenvolvimento do Gerenciador de Tarefas, portanto, para seu correto funcionamento, é necessário, primeiro, tê-las instalado no computador.

* Docker

Primeiramente é importante fazer a instalação do Docker, ferramenta de virtualização de sistemas. Para isso, clique em `Download Docker Desktop` [neste link](https://www.docker.com/get-started).

* Node.js

O Node.js é uma plataforma de execução JavaScript utilizada para executar o backend da aplicação e gerenciar as dependências do projeto por meio do npm (Node Package Manager). Para o correto funcionamento do Gerenciador de Tarefas, é obrigatório que o Node.js esteja instalado na máquina.

Acesse o site oficial do [Node.js](https://nodejs.org/pt-br/download). Selecione a versão **LTS**, pois ela oferece maior estabilidade e melhor compatibilidade com bibliotecas. Em seguida, role a página, escolha seu sistema operacional e a arquitetura correspondente e clique em `Instalador`. Por fim, execute o arquivo baixado para concluir a instalação.

* Git

O Git é um sistema de controle de versão utilizado para gerenciar o código-fonte do projeto e permitir a clonagem de repositórios. Para o correto funcionamento do Gerenciador de Tarefas, é necessário ter o Git instalado na máquina.

Acesse o site oficial do [Git](https://git-scm.com/install/). Na página de download, selecione o seu sistema operacional. O instalador será baixado automaticamente. Após o download, execute o arquivo e siga as etapas do assistente de instalação, mantendo as configurações padrão recomendadas. Ao final do processo, o Git estará pronto para uso.

## 2. Clonar repositório do sistema
Todo o código fonte do Gerenciador de Tarefas encontra-se disponível aqui no GitHub. Para baixá-lo em seu computador, siga os passos a seguir:

1. Clone o repositório `gerenciador-de-tarefas`, isso pode ser feito pelo Git Bash utilizando o comando
```
git clone https://github.com/carlossfreitass/gerenciador-de-tarefas.git
```

## 3. Executando o projeto em ambiente de desenvolvimento
Após clonar o repositório, execute os comandos abaixos **na raiz do projeto** `gerenciador-de-tarefas`.

1. Instalar todas as dependências

> Este comando irá instalar automaticamente as dependências do backend e do frontend. Portanto, deve ser utilizado apenas **uma** vez.

```
npm run install:all
```

2. Subir o banco de dados (PostgreSQL)

> Este comando inicializa os containers Docker necessários para o banco de dados. Para funcionamento do próprio, é obrigatório que o `Docker Desktop` esteja aberto.

```
npm run docker:up
```

3. Iniciar o backend (API NestJS)

> Em um terminal, execute:

```
npm run backend
```

4. Iniciar o frontend (React)

> Em outro terminal, execute:

```
npm run frontend
```

## 4. Acessar o Gerenciador de Tarefas

Após a execução do projeto, basta acessar http://localhost:5173 e você poderá utilizar o gerenciador de tarefas.

## 5. Finalizar o uso do Gerenciador de Tarefas

Ao finalizar o uso do projeto, para desligar os containers do banco de dados e encerrar a utilização de maneira correta, execute:

```
npm run docker:down
```