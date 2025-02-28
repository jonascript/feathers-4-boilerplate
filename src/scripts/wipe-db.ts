import optimist from 'optimist';
import prompt from 'prompt';

import configuration from '@feathersjs/configuration';

import app from '../app';
import logger from '../logger';

prompt.override = optimist.argv;

prompt.start();

prompt.get(
  [
    {
      name: 'confirm',
      description: `This will completely destroy and rebuilt the database. ENV: ${process.env.NODE_ENV} Are you sure? (y/n)`,
      pattern: /^[yYnN]+$/,
      message: 'Enter y or n',
      default: 'n',
      required: true,
    },
  ],
  function (err: any, result: any) {
    if (result.confirm === 'y') {
      console.log('Running db wipe');
      run();
    }
  }
);

async function run() {
  logger.info(
    `Wiping and rebuilding database for env: ${process.env.NODE_ENV}`
  );

  app.configure(configuration());
  await app.setup();

  await app.get('sequelizeSync');
  await app.get('sequelizeClient').sync({ force: true });

  logger.info('Database rebuilt.');
}
