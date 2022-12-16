# Omnisafe Backend Description

> - Created a Node.js/Express project.
> - Launch with port 3001. Port defined in the .env file.
> - Setup MySQL DB with Sequelize for ORM(Object Relation Mapper)
> - Create APIs such as SignUp, SignIn, and so on
> <br />...

## Launch Script

#### Start up the project
This script will launch the project with 3001 port
> npm run start <br />

#### Other scripts
> npm run node <br />

<br />

## Environment setting
You can set the environment seting by creating .env file and set the configuration as like below:
```
PORT='3001'

MYSQL_HOST='localhost'
MYSQL_USER='root'
MYSQL_PWD=''
MYSQL_DB='omnisafe'
MYSQL_PORT='3306'
JWT_KEY='omnisafe-key'
```