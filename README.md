
  

# ionidea-assignment

Node JS Assignment

# Description

 1. Password Validation

 - Assume sample form with user name and password is available. Using Node JS create custom validation for the password field. (Password should have at least 1 uppercase, 1 lowercase, 1 number, 1 special character, minimum of 8 characters, and maximum of 16 characters)
 
2. Todo

- Create "My to do list for Monday" using Node JS
	- a. Weekly call at 8 AM
	- b. Team meeting at 10 AM
	- c. Follow up meeting with the clients
	- d. Weekly Sales call at 6:30 PM
- **Hints** :
	- /todo: list of tasks.
	- /todo/add: add a task.
	- /todo/delete/:id: delete task
- Use any database (SQL or No SQL)

# Pre-requisite:
 - NodeJS
 - MongoDB

# Running the app
 - run the mongo server using the command `mongod`
 - run the node js app using the command `npm start`

# API Details

 1. Login API(Password validation check)
	 - POST: localhost:8088/user/login
	 - payload: `{"username":"Avinash","password":"Avinash@123"}`
2. Todo List API
	- GET: localhost:8088/todo
3. Todo add API
	- POST: localhost:8088/todo/add
	- payload: `{"message":"Call me up at 10 AM"}`
4. Todo delete API
	- DELETE: localhost:8088/todo/:id
	- id can be retrieved from the list api.
