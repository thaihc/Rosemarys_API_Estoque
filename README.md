<h1 align="center"> Rosemary's API </h1>

## Sobre o projeto

A proposta do projeto é a criação de uma API que retorna os dados do <strong>Estoque<strong> de um estúdio de Tatuagem, utilizando o padrão REST, os verbos HTTP e aplicando as operações CRUD.

<p> O projeto foi realizado utilizando o [Node.js](https://nodejs.org/en/) com framework [Express](https://expressjs.com/), utilizando como editor o VSCode (https://code.visualstudio.com/). <p>
  
---
  
## Pré-Requisitos

* Node.js  v.16.14.0
* NPM v.8.3.1

---
  
## Pacotes Utilizados

*Framework*
- [Express](https://www.npmjs.com/package/express) v.4.17.3

*Biblioteca*
- [Nodemon](https://www.npmjs.com/package/nodemon) v.2.0.15

*Banco de dados*
- [SQLite](https://www.npmjs.com/package/sqlite3)  v.5.0.0

---
## Instalação
- Abra o terminal para rodar os comandos abaixo:

1- Clone o repositório:
```
git clone git@github.com:thaihc/Rosemarys_API_Estoque.git 
```
2- Entre na pasta:
```
cd Rosemarys_API_Estoque
```

3- Instale os pacotes:
```
npm install
```

4- Crie e popule o banco de dados:
```
npm run db
```

5- Inicie o servidor:
```
npm start ou npm run dev
```
O servidor será aberto na porta:3000 - acesse <http://localhost:3000>
---

## Rotas implementadas para Estoque

 * **GET /estoque**
  
  ```
  Buscando todos os registros do Estoque:
  ```
 ![Rota get](https://user-images.githubusercontent.com/93946257/160214559-5de90161-e326-4a7b-bd7b-4abe6bef0c86.png)
    
 * **GET /estoque/nome/{nome}**
  
  ```
  Buscando registros através do nome:
  ```
  ![rota get com nome](https://user-images.githubusercontent.com/93946257/160214557-8bb2fd90-11bd-494a-b30e-af058fdde845.png)

 * **POST /estoque**
  
  ```
  Criando novos registros:
  ```
  ![Rota post](https://user-images.githubusercontent.com/93946257/160214561-91757746-40f3-43c8-a6fa-10777e950328.png)
     

 * **PUT /estoque/id/{id}**
  
  ```
  Alterando os registros através do id:
  ```
  ![Rota put](https://user-images.githubusercontent.com/93946257/160214562-bfa1d306-bd8f-41d9-95f4-8d13e1dfd7af.png)

 * **DELETE /estoque/id/{id}**
  
  ```
  Deletando registros através do id:
  ```
  ![Rota delete](https://user-images.githubusercontent.com/93946257/160214554-246d470c-d92c-4fa5-8927-f0b5cd570f19.png)

---
## Autoria
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/thaishcarvalho/)](https://www.linkedin.com/in/thaishcarvalho/) 

Feito por: Thaís Herculano de Carvalho.

---
  
Projeto realizado para fins educacionais (curso de Web Dev Full Stack da [Resilia Educação](https://www.resilia.com.br/) referente ao Módulo 04).


