# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

API Endpoints
myProduct

(GET /myApi/myProduct ) ==> server
(GET /myApi/myProduct/:id)
Create [token required] (POST /myApi/myProduct/make)
Update [token required] (PUT /myApi/myProduct/:id)
Delete [token required] (DELETE /myApi/myProduct/:id)

myUser:
(GET /myApi/myUser) ==> Index
(GET /myApi/myUser/:id) ==> show
(POST /myApi/myUser) ==> make (create)
(PUT /myApi/myUser/:id) ==> update
(DELETE /myApi/myUser/:id) ==> delete


myOrder
(GET /myApi/myOrder) ==> Index
(GET /myApi/myOrder/:id)==> show
(POST /myApi/myOrder)==> make (create)
(PUT /myApi/myOrder/:id)==> update
(DELETE /myApi/myOrder/:id) ==> delete


The Table myProduct include :
id
myName
myPrice
myCategory 

The SQL schema for this table :
CREATE TABLE myproduct (
    id SERIAL PRIMARY KEY,
    myName varchar(100) NOT NULL,
    myPrice numeric DEFAULT 0.00,
    myCategory varchar(50)
);


The Table myProduct include :
id
name_TheUser
myFirst_Name
myLast_Name
myPasswordValDigest

The SQL schema for this table :
CREATE TABLE myUser (
    id SERIAL PRIMARY KEY,
    name_TheUser varchar(25) NOT NULL,
    myFirst_Name varchar(50) NOT NULL,
    myLast_Name varchar(50) NOT NULL,
    myPasswordValDigest varchar
);


The Table myProduct include :
id
myUser_VALID
The SQL schema for this table:
CREATE TABLE myOrder (
    id SERIAL PRIMARY KEY,
    myUser_VALID INT NOT NULL,
    myStatus varchar NOT NULL,
    CONSTRAINT fk_myOrder_myUser
        FOREIGN KEY (myUser_VALID)
            REFERENCES myUser(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE
);


The Table myProduct_myOrder include :

id
myProduct_VAL_ID
myOrder_VAL_ID
myValQuantity

The SQL schema for this table:
CREATE TABLE myProduct_myOrder (
    id SERIAL PRIMARY KEY,
    myOrder_VAL_ID INT NOT NULL,
    myProduct_VAL_ID INT NOT NULL,
    myValQuantity INT NOT NULL,
    CONSTRAINT myOrder_fk
        FOREIGN KEY (myOrder_VAL_ID)
            REFERENCES myOrder(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE,
    CONSTRAINT myProduct_fk
        FOREIGN KEY (myProduct_VAL_ID)
            REFERENCES myproduct(id)
            ON DELETE CASCADE
            ON  UPDATE CASCADE
);
