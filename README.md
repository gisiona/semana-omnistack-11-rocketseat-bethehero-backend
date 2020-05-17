# semana-omnistack-11-rocketseat-bethehero-backend
Código da aplicação backend desenvolvido durante a Semana OmniStack 11 - BeTheHero

<h1 align="center">
    <img alt="Semana OmniStack" src="https://i.pinimg.com/originals/2c/7f/ab/2c7fab0f6656f17e4a8bac3d600900b1.png" width="200px" />
</h1>

<h2 align="center">
  <br/>
  🚀 Semana Omnistack 11.0
</h2>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<br>

## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)

Extras:

# Libs utilizadas:
    - express
    - nodemon
    - knex
    - sqllite3
    - cors

- Estilo Config Editor
    - [EditorConfig](https://editorconfig.org/)
    - [ESLint](https://eslint.org/)
    - [Prettier](https://prettier.io/)

## 💻 Projeto

O **Be The Hero** é um projeto que visa conectar pessoas interessadas em ajudar ongs com campanhas abertas.

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

# Comandos básicos do Knex:
    - npx knex init
    - npx knex migrate:make create_table
    - npx knex migrate:latest
    - npx knex migrate:roolback

# Rotas da aplicação
    # Ongs
        - Post: /ongs
        - Get:  /ongs
        
    # Incidentes
        - Post: /incidents
        - Get:  /incidents?page=1
        - Delete: /incidents/{id}

    # Profiles
        - Get: /profiles

    # Sessions
        - Post: /sessions
            - payload request:
                {
                    "id":"94256b8dceac9227c185da6f"
                }
            - payload response:
                {
                    "data": {
                        "nome": "Mão Branca Idosos"
                    }
                }

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
---