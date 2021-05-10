--
--  MySQL
--
DROP TABLE IF EXISTS  products;
CREATE TABLE products (
    prd_id     INT(10) NOT NULL AUTO_INCREMENT,
    prd_name   VARCHAR(150),
    prd_price  FLOAT,
    PRIMARY KEY (prd_id)
);
ALTER TABLE products AUTO_INCREMENT=1001;

INSERT INTO products (prd_name, prd_price) VALUES ('Product 1', 1199.95);
INSERT INTO products (prd_name, prd_price) VALUES ('Product 2', 11.95);
COMMIT;