# fathom-jokes

App I've made as a technical task for an interview.

# How to Run

Go to the Postgresql section below to initialize the DB first.
App is set up as a monorepo, you can find the api and the ui folders.
UI can be ran with `npm run dev` locally or `npm start`. For interview processes, I recommend using `npm run dev` for simplicity
and if you want to see the full build `npm run build`.

API can be ran with the same exact commands.

# Install Postgres with Docker

You will need Docker in order to use this. I'm going to document on the assumption that you have docker installed and basic knowledge of docker.
I won't assume knowledge over the concepts, but that you know how to use it and you know how to use a bash shell.

We will use a Docker compose file for our db init. You can find the `docker-compose.yml` inside `api/db/init`.

Navigate to the folder and run `docker compose up`. If everything went fine, you should be able to go to `localhost:5050` and you shuold see the pgAdmin login page. Login using admin@admin.com and root as a password.

We will need some manual steps.
Please follow the following steps:
Go to server and add a new server

![](docs/pgadmin1.png)

Create the server with the following configuration. It's provided in the docker compose file we created earlier. User and password is `root`

![](docs/pgadmin2.png)
![](docs/pgadmin3.png)

You should now have a fathom group with a jokes_db on postgresql.

![](docs/pgadmin4.png)

To recap, now we have the SQL DB and our json data is located on `api/db/pg-data`, so in order to migrate the data from our JSON file to our DB we need to run a script that will insert the data in the DB. All of these could be just simplified and add the data into a Non relation db, but following the test requirement we are asked to do in a SQL. I found this process to be the most demonstrative of some of my expertise.

PLEASE NOTE that the data in this project is the same that was provided but modified. I had to escape single quote characters and on top of that the id 189 was duplicated, so I changed on of the entries to id=388. I suggest using the data from the project instead of the provided, else it won't work.

The insert script consists of

```
INSERT INTO jokes
SELECT *
FROM json_populate_recordset (NULL::jokes,
' JSON_DATA');
```

Where `JSON_DATA` is the whole content in the file, with the array opening and closing brackets. Below it will be the script with 1 item in the array for the sake of not polluting the Readme file, but please copy all the content of the `jokes.json` file and add it to the script

Run the following script in the jokes_db:

```
CREATE TABLE jokes
(
	id INT NOT NULL PRIMARY KEY,
	 type VARCHAR(255) NOT NULL,
	 setup VARCHAR(255) NOT NULL,
	 punchline VARCHAR(255) NOT NULL
);
GO
INSERT INTO jokes
SELECT *
FROM json_populate_recordset (NULL::jokes,
/* PLEASE COPY THE CONTENT OF THE JOKES.JSON FILE AND ADD IT HERE, ELSE YOU WILL CREATE ONLE 1 ITEM*/
' [
  {
    "id": 1,
    "type": "general",
    "setup": "What did the fish say when it hit the wall?",
    "punchline": "Dam."
  }
]');

```

Now you should have your DB initialized with all the data, the api and ui can now be installed and ran correctly.
