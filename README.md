# tweeter-react

## Set up server side

npm init -y

npm i express

npm i -D nodemon

npm install dotenv

npm install pg

- install pg-native:

sudo apt-get install libpq-dev g++ make

npm i pg-native

## Set up react client

npx create-react-app client

## Set up Postgresql database
Fill in .env with .env.example

- Log in Postgresql:

sudo -u postgres psql

- Create user: 

CREATE ROLE DB_USER.value WITH LOGIN PASSWORD 'DB_PASS.value';

- Create database:

CREATE DATABASE DB_NAME.value WITH OWNER DB_USER.value;

- Access database:

\c DB_NAME.value;

### add to "script" package.json

  "start": "nodemon server.js",
  "db:reset": "node bin/resetdb.js"

### Create DB
- In server folder:

npm run db:reset