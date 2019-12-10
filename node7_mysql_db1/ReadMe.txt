Description :-
This App demo usage of a RESTful Services with 2 APIs i.e. products and orders.

Prerequisites :-
	Node and NPM installed
	MySQL installed
	Database created and port set to default as 3306 for e.g. here used spk-mysql-db
	SQL scripts run from schema.sql in a MySQL DB

	Run below in app root dir for dependent modules to load
		npm install --save express
		npm install --save mysql
		npm install --save body-parser
		npm install --save cors

	Set db details in db/database.js
	Set the port details in server.js

To start the app :-
	node app.js

url to access app :-
	http://localhost:6001/products

For all API request Postman collections refer :-
	https://www.getpostman.com/collections/7fb6f1a3e631ac394ed3

Note:
If you use the old auth client mechanism in mysql, you may get below error while connecting to DB :-
	"Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client"
Run below SQL Script to fix and restart the app
	alter user 'username'@'localhost' identified with mysql_native_password by 'password';