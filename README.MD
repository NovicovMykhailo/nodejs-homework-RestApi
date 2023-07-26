# GOIT-72 Nod js Rest API

### _-- Rest Api Contacts Back end --_

- **DEPLOYED @** &ensp; [![Deployed At | ](https://i.ibb.co/zG6DGXq/render-logo-818-C47-ACCA-seeklogo-com.png)](https://nodejs-restapi-g9eb.onrender.com/api/contacts) &ensp; &ensp;

<!-- - **SOURCE @**  &ensp;
[![Repository |](https://i.ibb.co/j3TLp8G/github-logo-vector.png)](https://github.com/NovicovMykhailo/nodejs-homework-RestApi.git) &ensp; &ensp;  -->

### Contacts REST API connected to MongoDB

![MongoDB Logo](https://i.ibb.co/Ht5xNDz/Mongo-db-logo-1.png)

**this API allows you** :

- View all contacts
- Add Contact
- Modify contact
- Delete contact
- Add Contact to Favorites

# Basic Methods

### Base URL &ensp; [[https://nodejs-restapi-g9eb.onrender.com/]](https://nodejs-restapi-g9eb.onrender.com/api/contacts)

#### for contacts `/api/contacts`

| Method | LINK | Description | Return |
| :-- | :-- | --: | --: |
| **GET** | [/](https://nodejs-restapi-g9eb.onrender.com/api/contacts) | Path to get all contacts | All Contacts |
| **POST** | [/](https://nodejs-restapi-g9eb.onrender.com/api/contacts) | Path to add contact to DB | New Contact |
| **GET** | [/:id](https://nodejs-restapi-g9eb.onrender.com/api/contacts?:id) | Path to get contact by ID | Found Contact |
| **DELETE** | [/:id](https://nodejs-restapi-g9eb.onrender.com/api/contacts/:id) | Path to delete Contact by ID | Message |
| **PUT** | [/:id](https://nodejs-restapi-g9eb.onrender.com/api/contacts/:id) | Update Contact by ID | Modified Contact |
| **PATCH** | [/:id/favorite](https://nodejs-restapi-g9eb.onrender.com/api/contacts/:id/favorite) | path to change favorite | new object|
| **GET** | [?page=1&limit=20](https://nodejs-restapi-g9eb.onrender.com/api/contacts?page=1&limit=20) | Pagination | page and contacts|
| **GET** | [?favorite=true](https://nodejs-restapi-g9eb.onrender.com/api/contacts??favorite=true) | Contacts by favorite | True or False|

### Authentication

#### for authorisation `/users`

| Method | LINK | Description | Return |
| :-- | :-- | --: | --: |
| **POST** | [/register](https://nodejs-restapi-g9eb.onrender.com/user/register) | Path to registration | user object |
| **POST** | [/login](https://nodejs-restapi-g9eb.onrender.com/user/login) | Path to SignIn | user object + Token |
| **POST** | [/logout](https://nodejs-restapi-g9eb.onrender.com/user/logout) | Path to logout | Status|
| **GET** | [/current](https://nodejs-restapi-g9eb.onrender.com/user/current) | Path to current User Info | User Info |
| **PATCH** | [/](https://nodejs-restapi-g9eb.onrender.com/user/current) | Path update Subscription | Updated user Info |

## Contact Example

```js
{
  "_id": "1223456id",             // String automatic generation String
  "name": "Name Surname",         // String Required
  "email": "email@email.com",     // String Required
  "phone": "(000) 000-0000",      // String Required
  "favorite": false               // Boolean auto-added but can modify
}
```
