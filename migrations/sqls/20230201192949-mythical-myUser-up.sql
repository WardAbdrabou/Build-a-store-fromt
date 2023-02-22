CREATE TABLE myUser (
    id SERIAL PRIMARY KEY,
    name_TheUser varchar(25) NOT NULL,
    myFirst_Name varchar(50) NOT NULL,
    myLast_Name varchar(50) NOT NULL,
    password_digest varchar
);