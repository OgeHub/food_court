# Meal Addon API

**Brief Description**: This API provides endpoints for a meal management application that allows users to create, read, update, and delete meal addons.

## Major Technologies

```
1. NESTJS
2. ObjectionJs
3. KnexJs
4. TypeScript
```

## Routes

```
**Local**: `Base_URL` = `http://localhost:3000/api`
**Live**: `Base_URL` = `https://my-nodejs-typescript.onrender.com/api`

**Create addon**:
POST `Base_URL`/brands/:brandId/addons
req.body:
{
"name": "Ofe Akwu",
"description": "Delicious soup",
"price": 800,
"categoryName": "Soups",
}

**Get all addons**:
GET `Base_URL`/brands/:brandId/addons

**Get one addon**:
GET `Base_URL`/brands/:brandId/addons/:id

**Update addon**:
PATCH `Base_URL`/brands/:brandId/addons/:id
req.body:
{
"name": "Ofe Akwu",
"description": "Delicious soup",
"price": 800,
"categoryName": "Soups",
}

**Delete one addon**:
DELETE `Base_URL`/brands/:brandId/addons/:id
```

## Running this API

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
