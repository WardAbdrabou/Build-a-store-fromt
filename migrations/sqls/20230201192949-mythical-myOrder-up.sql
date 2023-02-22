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
