import app from './src/app';
module.exports = async () => {
  app.emit('shutdown');
};
