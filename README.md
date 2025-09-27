# Testes de API para o Golden Movie Studio (server-gms)

Este repositório contém uma coleção de testes de API do Postman para o projeto [server-gms](https.github.com/EBAC-QE/server-gms), o servidor em memória do Golden Movie Studio, utilizado para o treinamento de alunos de QA da EBAC.

## 📝 Pré-requisitos

Antes de executar os testes, certifique-se de que você tem o seguinte instalado e configurado:

* **[Postman](https://www.postman.com/downloads/):** A plataforma de colaboração para desenvolvimento de API.
* **[server-gms](https://github.com/EBAC-QE/server-gms):** O servidor deve estar clonado e rodando localmente. Siga as instruções no repositório oficial para a instalação:
    1.  Clone o repositório: `git clone https://github.com/EBAC-QE/server-gms.git`
    2.  Instale as dependências: `npm install`
    3.  Inicie o servidor: `npm start`
    * O servidor estará rodando em `http://localhost:3000`.

## 🚀 Como Usar

1.  **Clone este repositório** ou baixe o arquivo `Golden Movie Studio.postman_collection.json`.
2.  **Abra o Postman.**
3.  Clique em **Import** no canto superior esquerdo.
4.  **Faça o upload do arquivo** `Golden Movie Studio.postman_collection.json`.
5.  Após a importação, a coleção "Golden Movie Studio" aparecerá na sua aba de Collections.
6.  Abra a coleção e execute os testes individualmente ou clique em "Run collection" para executar todos os testes de uma vez.

## ✅ Testes Incluídos

A coleção abrange os principais endpoints da API, testando cenários de sucesso e de falha.

### Usuários

* **Buscar user por ID válido:** Verifica se um usuário é retornado com sucesso ao buscar por um ID existente.
* **Buscar user por ID inválido:** Garante que uma mensagem de erro apropriada é retornada ao buscar por um ID que não existe.
* **Cadastro de usuário com sucesso:** Testa o cadastro de um novo usuário com dados válidos.
* **Cadastro de usuário sem sucesso - email:** Verifica a validação que impede o cadastro de um e-mail já existente.
* **Busca user por email válido:** Confere se um usuário é retornado com sucesso ao buscar por um e-mail cadastrado.
* **Busca user por email inválido:** Garante que uma mensagem de erro é exibida ao buscar por um e-mail não cadastrado.

### Filmes

* **Busca filme por título válido:** Valida a busca de um filme com um título existente.
* **Busca filme por título inválido:** Assegura que uma mensagem de erro é retornada ao buscar por um filme com título inexistente.
