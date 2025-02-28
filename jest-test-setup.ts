import { afterAll } from '@jest/globals';

import app from './src/app';

beforeAll(async () => {
  // Tells the express app singleton to shutdown
  // closing any connections.
  await app.setup();

  const sequelize = await app.get('sequelizeSync');

  if (process.env.NODE_ENV !== 'test') {
    throw new Error('Environment must be "test"');
  }

  // @todo This is a workaround for the mock data having the same document id. Ensures the
  // db is clean before each test suite.
  await sequelize.sync({ force: true });
});

// Runs after each test suite
afterAll(async () => {
  // Tells the express app singleton to shutdown
  // closing any connections.
  // app.emit('shutdown');
});
