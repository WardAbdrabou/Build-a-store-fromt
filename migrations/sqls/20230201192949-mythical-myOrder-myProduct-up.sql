CREATE TABLE myProduct_myOrder (
    id SERIAL PRIMARY KEY,
    myOrder_VAL_ID INT NOT NULL,
    myProduct_VAL_ID INT NOT NULL,
    myValQuantity INT NOT NULL,
    CONSTRAINT myOrder_fk
        FOREIGN KEY (myOrder_VAL_ID)
            REFERENCES myOrder(myID)
            ON DELETE CASCADE
            ON UPDATE CASCADE,
    CONSTRAINT myProduct_fk
        FOREIGN KEY (myProduct_VAL_ID)
            REFERENCES myproduct(id)
            ON DELETE CASCADE
            ON  UPDATE CASCADE
)