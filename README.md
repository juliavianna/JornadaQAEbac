# Testes de API e Frontend para o Golden Movie Studio (server-gms)

Este repositório contém uma suíte de testes para o projeto [Golden Movie Studio](https://github.com/EBAC-QE/golden-movie-studio), utilizado para o treinamento de alunos de QA da EBAC.

O projeto inclui:
* Uma coleção de testes de API do **Postman** para o [servidor backend (server-gms)](https://github.com/EBAC-QE/server-gms).
* Testes de ponta a ponta (E2E) com **Cypress** para a [aplicação frontend (golden-movie-studio)](https://github.com/EBAC-QE/golden-movie-studio).

## 📝 Pré-requisitos

Antes de executar os testes, certifique-se de que você tem o seguinte instalado e configurado:

* **Node.js**
* **Git**
* **Postman** (para os testes de API)

---

## 🚀 Testes de API (Postman)

### 1. Configuração do Servidor Backend (server-gms)

Os testes de API precisam que o servidor esteja rodando localmente.

1.  Clone o repositório do servidor:
    ```bash
    git clone [https://github.com/EBAC-QE/server-gms.git](https://github.com/EBAC-QE/server-gms.git)
    ```
2.  Navegue até a pasta e instale as dependências:
    ```bash
    cd server-gms
    npm install
    ```
3.  Inicie o servidor:
    ```bash
    npm start
    ```
    *O servidor estará rodando em `http://localhost:3000`.*

### 2. Como Usar a Coleção do Postman

1.  Abra o **Postman**.
2.  Clique em **Import** no canto superior esquerdo.
3.  Faça o upload do arquivo `Golden Movie Studio.postman_collection.json` deste repositório.
4.  Após a importação, a coleção "Golden Movie Studio" aparecerá na sua aba de Collections.
5.  Execute os testes individualmente ou clique em "Run collection" para rodar todos de uma vez.

### ✅ Testes de API Incluídos

A coleção abrange os principais endpoints da API, testando cenários de sucesso e de falha.

#### Usuários
* Buscar user por ID válido e inválido.
* Cadastro de usuário com sucesso.
* Validação de cadastro com e-mail duplicado.
* Busca de user por e-mail válido e inválido.

#### Filmes
* Busca de filme por título válido e inválido.

---

## 🖥️ Testes de Frontend (Cypress)

### 1. Configuração do Ambiente de Frontend (golden-movie-studio)

Para executar os testes de frontend, a aplicação precisa estar rodando localmente.

1.  Clone o repositório do frontend em uma **nova pasta**:
    ```bash
    git clone [https://github.com/EBAC-QE/golden-movie-studio.git](https://github.com/EBAC-QE/golden-movie-studio.git)
    ```
2.  Navegue até o diretório do projeto e instale as dependências:
    ```bash
    cd golden-movie-studio
    npm install
    ```
3.  Inicie a aplicação:
    ```bash
    npm start
    ```
    *A aplicação frontend estará acessível em `http://localhost:3000`.*

### 2. Como Rodar os Testes com Cypress

Os testes estão localizados na pasta `testesFrontend` deste repositório.

1.  Navegue até a pasta dos testes de frontend:
    ```bash
    cd testesFrontend
    ```
2.  Instale as dependências do Cypress:
    ```bash
    npm install
    ```
3.  Abra o painel do Cypress para executar os testes:
    ```bash
    npx cypress open
    ```
4.  Na janela do Cypress, clique no arquivo de teste que deseja executar.

### ✅ Testes de Frontend Incluídos

Os testes automatizados cobrem a funcionalidade de cadastro de membros, garantindo as seguintes validações:

* **Cadastro com sucesso:** Verifica se um usuário é cadastrado com sucesso ao preencher todos os campos obrigatórios corretamente.
* **Validação de email inválido:** Garante que o sistema exibe uma mensagem de erro ao tentar cadastrar um email com formato inválido.
* **Validação de campos obrigatórios:** Confere se o sistema exibe uma mensagem de erro ao tentar submeter o formulário vazio.
* **Validação de senha fraca:** Assegura que o sistema bloqueia o uso de senhas que não atendem aos critérios de segurança.
* **Validação de email duplicado:** Verifica se o sistema impede o cadastro de um email que já existe na base de dados.
