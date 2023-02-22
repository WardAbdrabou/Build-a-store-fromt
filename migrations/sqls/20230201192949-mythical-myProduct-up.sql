CREATE TABLE myproduct (
    id SERIAL PRIMARY KEY,
    myName varchar(100) NOT NULL,
    myPrice numeric DEFAULT 0.00,
    myCategory varchar(50)
);