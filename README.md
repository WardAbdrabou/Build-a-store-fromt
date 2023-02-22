project Storefront backend build :

tha api route information and database schema can be found in requirments.md
==> The Libraries i used 
The following libraries is being used for my application

Node.js (JavaScript) ==> RunTime
Express ==> Web application
TypeScript ==> Language
Postgres ==> Database
Jasmine and Supertest ==>test

==> Instructions for Installation
Dev mode :
to can use app in dev mode and ton install app's dependencies..
you can use the following:

npm create-dev-db

we can runs a script that uses db-migrate to create a new database called full_stack_dev ==> npm  create-dev-db
==>and also we can create table by run migration.
this script assume that the server is running and we install postgress
npm start ==> to run app in dev mode

Test mode :
to can use app in test mode and ton install app's dependencies..
you can use the following:

npm create-test-db

we can  runs a script that uses db-migrate to create a new database called full_stack_test ==> npm create-test-db
==>and also we can create table by run migration.
this script assume that the server is running and we install postgress

npm test ==> to run app in test mode

Ports : 
The application runs on port 4000 on database postgress (5432) ,
http://localhost:3000


Environment variables
ENV=dev

POSTGRES_HOST=localhost
POSTGRES_myDEV_DB=full_stack_dev
POSTGRES_myTEST_DB=full_stack_test
POSTGRES_USER=postgres
POSTGRES_PASSWORD=mytest123

BCRYPT-variables
BCRYPT_PASSWORD=supercalifragilisticexpialodocious
SALT_ROUNDS=10

JWT
mytokenSecret=wardA!

