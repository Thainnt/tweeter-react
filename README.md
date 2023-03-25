# Tweeter
A Twitter clone app with responsive design for desktop and mobile device screen sizes.
Tech stack: NodeJS, React, Express, PostgreSQL
## Set up server side
`npm i`
- May require for pg-native:
`sudo apt-get install libpq-dev g++ make`

## Set up react client
`npm i`

## Set up Postgresql database
Fill in .env with .env.example
- Log in Postgresql: `sudo -u postgres psql`
- Create user: `CREATE ROLE username WITH LOGIN PASSWORD 'password';`
- Create database: `CREATE DATABASE dbname WITH OWNER dev;`
- Log in database `dbname` as user `dev`: `psql -h localhost -d dbname -U dev -p 5432`
- Access database: `\c dbname;`

### Initiate DB
- In server folder: `npm run db:reset`
