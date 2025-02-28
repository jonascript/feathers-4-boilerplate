#

This is a coding exercise for this [challenge](./EXERCISE.md)

## Table of Contents

- [Tech](#tech)
- [Installation](#installation)
- [Usage](#usage)
- [Approach](#approach)
- [Known Issues](#known-issues--caveats)
- [Support](#support)

## Tech

- Node 20
- Jest
- Docker
- TypeSript
- Feathers v4 (Dove)
- Sequelize

## Approach

## Services

### Service A

## Installation

### Docker

If using docker do:
`docker-compose up`

Then go to http://localhost:3030

These are the endpoints:

- http://localhost:3030/servce-a

You can then run commands like tests doing:  
`docker-compose run backend npm test `

`docker-compose run backend npm run db:wipe:dev`

### Not Docker

If not using docker you can do:

```
npm i
npm run compile
npm start
```

For Dev:

```
npm run dev
```

To Run Tests:

```
npm test
```

To Wipe Dev SQLite DB:

```
npm run db:wipe:dev
```

To Wipe Test SQLite DB:
The test DB automatically wipes after each test suite, however, in case something goes wrong you can manually wipe it here

```
npm run db:wipe:test
```

## Usage

There's no auth as this is a demo you can CRUD any anypoint with Postman or curl:

To simiulate the input.json in the exercise run the following script:

`bash try-me.sh`

**Note:** you have to run this outside of docker and will require the DB to be clean as there are unique constraints.

http://localhost:3030/service-a

## Tests

Tests are using Jest with some mocks and use a a separate SQLlite db: db.test.sqlite

The test suite at: `src/services/document-webhook/**tests**/service-a.test.ts``
covers the requirements set out in the exercise and there are various other tests for the services.

To run tests using docker do:

```
docker-compose run test
```

or without docker

```
npm test
```

Feel free to remove any sections that aren't applicable to your project.

## Known Issues / Caveats

- Sequelize and SQLite don't quite jive with how they store and represent timestamps and JSON fields. I've added some logic to handle this but there may be some inconsistencies there.

- The Jest tests because the mock documents are using the same data run into conflicts between suites so as a workaround I wipe the test db after each suite. Given more time I would resolve this as this will slow down with more tests.

- There's a websocket server running but it currently isn't being used.

- The webhook-document service doesn't record the document ID when it receives requests as that's being used as a foreign key. I would refactor this given more time and move this request to a "body" field which would preserve the data as it's received or change this to a queue.

## Support

If you have any issues please email joncrockett@gmail.com and I'll help right away.
