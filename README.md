# Tweeter-React

## Set up server side
`npm init -y`
`npm i express dotenv pg`
`npm i -D nodemon`

- install pg-native:
`sudo apt-get install libpq-dev g++ make`
`npm i pg-native`

## Set up react client
`npx create-react-app client`

## Set up Postgresql database
Fill in .env with .env.example
- Log in Postgresql: `sudo -u postgres psql`
- Log in database `twter` as user `dev`: `psql -h localhost -d twter -U dev -p 5432`

- Create user: `CREATE ROLE username WITH LOGIN PASSWORD 'password';`

- Create database: `CREATE DATABASE DB_NAME.value WITH OWNER DB_USER.value;`

- Access database: `\c dbname;`

### add to "script" package.json
  "start": "nodemon server.js",
  "db:reset": "node bin/resetdb.js"

### Create DB
- In server folder: `npm run db:reset`