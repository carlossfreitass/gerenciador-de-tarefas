# Desafio Técnico | Gerenciador de Tarefas

## Objetivo
Desenvolver uma aplicação simples de gerenciamento de tarefas utilizando:
- **Backend:** Node.js + NestJS  
- **Frontend:** React ( utilizando Vite )
- **Service:** Microserviço em Python para sugestão de título de tarefas

---

## Estrutura de Pastas
    ├── backend/      → API RESTful (Node.js + NestJS + Postgres)
    ├── frontend/     → Aplicação Web (Vite + React + TypeScript)
    └── services/     → Microserviço em Python

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

* Ollama

O Ollama é a ferramenta utilizada para executar modelos de linguagem localmente, sendo responsável por fornecer a IA usada em algumas funcionalidades do Gerenciador de Tarefas. Para garantir o correto funcionamento da aplicação, é necessário que o Ollama esteja instalado no computador.

Para realizar a instalação, acesse o site oficial do [Ollama](https://ollama.com/) e faça o download do instalador compatível com o seu sistema operacional. Após o download, execute o instalador e siga as instruções exibidas na tela até a conclusão do processo. Ao abri-lo, verifique se o modelo `gemma3:4b` esteja instalada.

* Node.js

O Node.js é uma plataforma de execução JavaScript utilizada para executar o backend da aplicação e gerenciar as dependências do projeto por meio do npm (Node Package Manager). Para o correto funcionamento do Gerenciador de Tarefas, é obrigatório que o Node.js esteja instalado na máquina.

Acesse o site oficial do [Node.js](https://nodejs.org/pt-br/download). Selecione a versão **LTS**, pois ela oferece maior estabilidade e melhor compatibilidade com bibliotecas. Em seguida, role a página, escolha seu sistema operacional e a arquitetura correspondente e clique em `Instalador`. Por fim, execute o arquivo baixado para concluir a instalação.

* Git

O Git é um sistema de controle de versão utilizado para gerenciar o código-fonte do projeto e permitir a clonagem de repositórios. Para o correto funcionamento do Gerenciador de Tarefas, é necessário ter o Git instalado na máquina.

Acesse o site oficial do [Git](https://git-scm.com/install/). Na página de download, selecione o seu sistema operacional. O instalador será baixado automaticamente. Após o download, execute o arquivo e siga as etapas do assistente de instalação, mantendo as configurações padrão recomendadas. Ao final do processo, o Git estará pronto para uso.

* Python

O Python é utilizado no projeto para executar serviços auxiliares da aplicação, incluindo a API desenvolvida com Flask. Para o correto funcionamento do Gerenciador de Tarefas, é obrigatório que o Python esteja instalado na máquina.

Para realizar a instalação, acesse o site oficial do [Python](https://www.python.org/downloads/) e faça o download do instalador. Após o download, execute o instalador e siga as instruções exibidas na tela até a conclusão do processo.

## 2. Clonar repositório do sistema
Todo o código fonte do Gerenciador de Tarefas encontra-se disponível aqui no GitHub. Para baixá-lo em seu computador, siga os passos a seguir:

1. Clone o repositório `gerenciador-de-tarefas`, isso pode ser feito pelo Git Bash utilizando o comando
```
git clone https://github.com/carlossfreitass/gerenciador-de-tarefas.git
```

## 3. Executando o projeto em ambiente de desenvolvimento
Após clonar o repositório, execute os comandos abaixos **na raiz do projeto** `gerenciador-de-tarefas`.

1. Instalar todas as dependências

> Este comando irá instalar automaticamente as dependências do backend, frontend e microserviço. Portanto, deve ser utilizado apenas **uma** vez.

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

4. Iniciar o microserviço (Python)

> Este comando inicializa o microserviço em Python necessário para a sugestão de título de tarefas com IA. Para funcionamento do próprio, é obrigatório que o `Ollama` esteja aberto.

> Para a inicialização correta do microserviço é necessário que você crie na pasta `services` um arquivo `.env` com o seguinte conteúdo:

```
OLLAMA_URL=http://localhost:11434
OLLAMA_MODEL=gemma3:4b
```

Após a criação da variável ambiente, em outro terminal execute:

```
npm run services
```

5. Iniciar o frontend (React)

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

Por fim, poderá realizar o encerramento do `Docker Desktop` e `Ollama`.