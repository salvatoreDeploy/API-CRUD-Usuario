# API CRUD - Usuario

## Requisitos:

- Node.Js
- Docker

## Bibliotecas:

- Prisma
- JsonWebToken

## Base de dados:

- MySql
- Php My Admin

## Rotas:

- Account:

  Criação de Usuario "http://localhost:3333/account/"

  Autenticaçao de Usuario "http://localhost:3333/account/login"

- User:

  Listagem de todos os Usuarios "http://localhost:3333/user/"

  Busca de usuario por nome ou email : "http://localhost:3333/user/search/?name=&email="

  Atualização de informações do Usuario "http://localhost:3333/user/update/:id"

  Deletar Usuario, mantendo usuario na base de dados, apenas inativando o usuario, "http://localhost:3333/user/delete/:id"

  Deletar Usuario, distruindo o usuario da base de dados, "http://localhost:3333/user/destroy/:id"

## Implementação:

Realizar um gitclone deste repositorio com este comnando: `git@github.com:salvatoreDeploy/API-CRUD-Usuario.git`

- Download, criação dos containers com banco MySql:

Editar arquivo `docker-compose.example.yml`, retirando o .example do nome e adicionando informaçoes em branco, apos isso com docker instalado, dentro da pasta do projeto rodar comando `docker-compose up -d` .

- Rodar servido do projeto:

Verificar a utlização da porta 3333 pois eh nesta que esta com configurada, com isso rodar comando `yarn dev`

- Dowload das dependencias do projeto:

Rodar comando `yarn` no terminal dentro da pasta do projeto.

- Rodando as Migrations no banco de dados:

Rodar o comando para iniciar o prisma `yarn prisma init`.

Paramentar o arquivo `.env` criado com usuario, senha e nome da database

Apos isso rodar comando `yarn prisma migrate dev` assim rodara as migrations existente e criara as tabelas no banco de dasdo.
