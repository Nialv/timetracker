This is a prototype project using multiple techs like redux, react, jwt, node, docker, docker-compose, sh bash actions, github, tailwind, cors config, cookies, and other. 

** (Oowlish was the company where I first present this project, but this code is totally mine and all in here is my property, its still WIP).

The idea of this repo is to show a bit of the knowledge for posible clients, the reason why I don't have multiple proyects is cause I've been usually working full time on multiple companies with different clients, and their code is private so I can't display it in here.

This project was build from scratch and following the most common patters, like display prototypes in figma, db schema elaboration, etc.


# Oowlish Time Tracker App

- Set up Frontend (FE):
  - `npm create vite@latest` for FE basic structure creation.

- Set up Backend (BE):
  - `npx i express helmet cors` for BE basic structure creation.

- Set up Styling:
  - `npm install -D tailwindcss postcss autoprefixer` + `npx tailwindcss init -p` for styles.

## Start Dockers with Docker Compose (Development)

- Run the command:
  - `docker compose-up`

## Start Dockers with Docker Compose (Production)

- Run the command:
  - `docker-compose -f docker-compose.yml up`

## Start Docker with Bash

- Run the commands:
  - `chmod +x ./bin/bash.sh`
  - `./bin/bash.sh`

# Database Schema (ER - UML)

- [Chart link](https://lucid.app/lucidchart/a917354e-937a-4c81-bebe-73a63acc75ce/edit?beaconFlowId=C2BBFC8A2D444C72&invitationId=inv_83647abe-1f17-4073-912a-e384a9c12f5a&page=0_0#)
    
![ER-UML_OOWLISH](https://github.com/Nialv/oowlish_timetracker/assets/132946870/f9358e7b-a6dc-4c39-8e65-1a271d33bcb8)


## Create New Module.

1. Create migrations table and define it fields.  `npm run db:create create_tablename_table`
2. (Optional) Create seeds 
3. Create model
4. (Optional) Create Types
5. Create service
6. Create Controller
7. (Optional) Add helpers
8. Add controller to routes

## Git PR conventions:

````time-tracker-web/feat/add_clients_interaction````

 -- time-tracker-web (Frontend)
 -- time-tracker-api (Backend)

 -- debug
 -- feat
 -- fix
 -- refactor
