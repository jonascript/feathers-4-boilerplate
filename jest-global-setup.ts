import app from './src/app';

// @todo load this from app or use convict
module.exports = async () => {
  await app.setup();

  const sequelize = await app.get('sequelizeSync');

  console.log('Force syncing DB. ENV:', process.env.NODE_ENV);

  if (process.env.NODE_ENV !== 'test') {
    throw new Error('Environment must be "test"');
  }

  await sequelize.sync({ force: true });

  console.log('DB force synced.');
};
