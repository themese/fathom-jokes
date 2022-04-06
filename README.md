# fathom-jokes

App I've made as a technical task for an interview. 

# How to Run

App is set up as a monorepo, you can find the api and the ui folders.
UI can be ran with ```npm run dev``` locally or ```npm start```. For interview processes, I recommend using ```npm run dev``` for simplicity 
and if you want to see the full build ```npm run build```.

API can be ran with the same exact commands.

# Code explanation

API is built on Express with Typescript, as I prefer having typesafety, specially on APIs.

UI is plain TS with Html and CSS.

# Postgres with Docker

TO-DO: Run docker locally with npm run dev or extra command.
https://towardsdatascience.com/local-development-set-up-of-postgresql-with-docker-c022632f13ea

docker run -d \
	--name dev-postgres \
	-e POSTGRES_PASSWORD=securePass! \
	-v pg-data \
        -p 5432:5432
        postgres

docker pull dpage/pgadmin4
$ docker run \ 
    -p 80:80 \
    -e 'PGADMIN_DEFAULT_EMAIL=user@domain.local' \
    -e 'PGADMIN_DEFAULT_PASSWORD=SuperSecret' \
    --name dev-pgadmin \ 
    -d dpage/pgadmin4