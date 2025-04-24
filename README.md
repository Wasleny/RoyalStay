# RoyalStay

<a href="https://royal-stay-eta.vercel.app/">VEJA O PROJETO AQUI</a>

Este projeto é um sistema completo para reserva de quartos de hotel, com funcionalidades voltadas tanto para hóspedes quanto para a administração dos hotéis. O sistema permite:

- Gerenciamento de hotéis, quartos e funcionários por parte dos administradores;

- Acesso e gerenciamento de reservas, tanto por hotéis quanto por hóspedes.

A ideia é proporcionar uma plataforma prática, organizada e eficiente para facilitar o processo de reserva e administração hoteleira.

<br>
<br>

This project is a complete system for booking hotel rooms, with features aimed at both guests and hotel management. The system allows:

- Management of hotels, rooms and employees by administrators;

- Acess and manegement of reservations, both by hotels and guests.

The idea is to provide a practical, organized and efficient platform to facilitate the process of booking and hotel management.

---

## 📌 Tabela de Conteúdos / Table of Contents

- [RoyalStay](#royalstay)
  - [📌 Tabela de Conteúdos / Table of Contents](#-tabela-de-conteúdos--table-of-contents)
  - [📖 Sobre o Projeto / About the Project](#-sobre-o-projeto--about-the-project)
  - [🚀 Tecnologias Utilizadas / Technologies Used](#-tecnologias-utilizadas--technologies-used)
  - [⚙️ Instalação / Installation](#️-instalação--installation)
    - [Pré-requisitos / Prerequisites](#pré-requisitos--prerequisites)
    - [Passos / Steps](#passos--steps)
  - [📌 Uso / Usage](#-uso--usage)
  - [🤝 Contribuição / Contribution](#-contribuição--contribution)
    - [Em português](#em-português)
    - [In English](#in-english)

---

## 📖 Sobre o Projeto / About the Project

Este é um sistema para reservas de quartos de hotel, desenvolvido como parte do projeto final da disciplina de Programação Web, mas também pensado para compor o portfólio dos desenvolvedores.

O objetivo é construir um sistema completo do zero, cobrindo tanto o frontend quanto o backend, com funcionalidades voltadas para:

Administração de hotéis, com cadastro e gerenciamento de quartos e funcionários;

Acesso e controle de reservas, tanto por parte dos hotéis quanto dos hóspedes.

O projeto está sendo desenvolvido em dupla e passa por várias etapas ao longo do semestre:

Início com HTML e Sass para estruturação e estilo;

Evolução para React, trazendo dinamismo e componentização ao frontend;

Implementação do backend com Python, seguido de uma versão final utilizando o framework FastAPI.

Além de atender aos requisitos acadêmicos, o projeto também busca refletir boas práticas de desenvolvimento e organização de código, servindo como uma vitrine real para futuras oportunidades profissionais.

<br>
<br>

This is a hotel room booking system, developed as the final project for the Web Programming course, and also intended to be part of the developers' professional portfolio.

The goal is to build a complete system from scratch, covering both frontend and backend, with features designed for:

Hotel management, including the registration and management of rooms and staff;

Reservation access and control, available to both hotel administrators and guests.

The project is being developed by a team of two, and goes through multiple stages throughout the semester:

Starting with HTML and Sass for structure and styling;

Migrating to React to add interactivity and component-based architecture to the frontend;

Implementing the backend using Python, with a final version using the FastAPI framework.

In addition to meeting the academic requirements, the project aims to follow good development practices and clean code organization, serving as a real showcase for future professional opportunities.

---

## 🚀 Tecnologias Utilizadas / Technologies Used

O projeto está sendo desenvolvido em etapas, utilizando diferentes tecnologias ao longo do tempo:

- HTML – estruturação inicial do frontend

- Sass – estilização com pré-processador CSS

- React – para construção de uma interface dinâmica e componentizada (futuro)

- Python – backend inicial com foco em lógica e organização (futuro)

- FastAPI – versão final do backend com foco em APIs modernas e performáticas (futuro)

<br>
<br>

This project is being developed in stages, using different technologies over time:

- HTML – initial frontend structure

- Sass – styling using a CSS preprocessor

- React – to build a dynamic, component-based interface (upcoming)

- Python – initial backend focused on logic and structure (upcoming)

- FastAPI – final backend version using a modern and high-performance API framework (upcoming)

---

## ⚙️ Instalação / Installation

### Pré-requisitos / Prerequisites

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- Git – Para clonar o repositório.

- Node.js e npm – Para o gerenciamento de dependências e execução do frontend em React (futuro) e para pré-processar o sass.

- Python (versão 3.8 ou superior) – Para o desenvolvimento do backend com FastAPI (futuro).

- VSCode ou editor de sua escolha – Para editar e rodar o código.

<br>

Before you begin, ensure you have the following tools installed:

- Git – To clone the repository.

- Node.js and npm – For dependency management and running the React frontend (upcoming).

- Python (version 3.8 or higher) – For backend development with FastAPI (upcoming).

- VSCode or any editor of your choice – To edit and run the code.

### Passos / Steps

1. Clone o repositório
   ```
   git clone https://github.com/Wasleny/RoyalStay.git
   cd RoyalStay
   ```
2. Instale as dependências do projeto, incluindo o Sass como dependência de desenvolvimento:

   ```
   npm install

   ```

3. Rode o script de desenvolvimento para compilar Sass automaticamente e assistir a alterações:

   ```
   npm run dev

   ```

4. Rodar o lint para garantir que o código esteja bem formatado:

   ```
   npm run lint

   ```

5. Abra o arquivo `index.html` no navegador ou utilize a extensão Live Server no VSCode para visualizar o projeto em execução.

<br>
<br>

1. Clone the repository
   ```
   git clone https://github.com/Wasleny/RoyalStay.git
   cd RoyalStay
   ```
2. Install the project dependencies, including Sass as a development dependency:

   ```
   npm install

   ```

3. Run the development script to automatically compile Sass and watch for changes:

   ```
   npm run dev

   ```

4. Run the lint to ensure the code is well formatted:

   ```
   npm run lint

   ```

5. Open the `index.html` file in your browser or use the Live Server extension in VSCode to preview the project.

---

## 📌 Uso / Usage

Explique como utilizar o projeto com exemplos ou capturas de tela, se necessário.

Explain how to use the project with examples or screenshots, if needed.

---

## 🤝 Contribuição / Contribution

### Em português

Contribuições são sempre bem-vindas! Para contribuir com este projeto, siga as etapas abaixo:

1. Crie uma nova branch para sua contribuição:

   ```
   git checkout -b minha-contribuicao
   ```

2. Faça as alterações necessárias no código e garanta que o código esteja seguindo os padrões estabelecidos.

3. Rodar o Lint para garantir que o código esteja bem formatado:
   ```
   npm run lint
   ```
4. Commit suas alterações utilizando o formato Conventional Commits. O formato básico é:
   ```
   <tipo>(<escopo>): <mensagem>
   ```
   Exemplos de tipos:

    - feat: para novos recursos.
    - fix: para correções de bugs.
    - docs: para alterações na documentação.
    - style: para mudanças no estilo do código (formatação, espaços, etc.).
    - refactor: para refatorações de código sem alterar a funcionalidade.
    - test: para adicionar ou alterar testes.

    Exemplos de mensagens de commit:
    - feat(auth): add login functionality
    - fix(header): fix missing logo on mobile view
    - docs(readme): update installation instructions

5. Suba sua branch para o repositório remoto:
   ```
   git push origin minha-contribuicao
   ```
6. Abra um Pull Request (PR) para a branch principal (main) do repositório.

Agradecemos pela sua contribuição! 💙

### In English

Contributions are always welcome! To contribute to this project, follow the steps below:

1. Create a new branch for your contribution:
    ```
    git checkout -b my-contribution
    ```

2. Make the necessary changes to the code and ensure it follows the established coding standards.

3. Run the Lint to ensure the code is properly formatted:
    ```
    npm run lint
    ```

4. Commit your changes using the Conventional Commits format. The basic format is:
    ```
    <type>(<scope>): <message>
    ```

    Example types:
    - feat: for new features.
    - fix: for bug fixes.
    - docs: for documentation changes.
    - style: for code style changes (formatting, whitespace, etc.).
    - refactor: for code refactoring without changing functionality.
    - test: for adding or modifying tests.
  
    Example commit messages:
   - feat(auth): add login functionality
   - fix(header): fix missing logo on mobile view
   - docs(readme): update installation instructions

2. Push your branch to the remote repository:
    ```
    git push origin my-contribution
    ```
3. Open a Pull Request (PR) to the main branch (main) of the repository.

Thank you for your contribution! 💙
