// Initializes the `hello-world` service on path `/hello-world`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { HelloWorld } from './hello-world.class';
import createModel from './hello-world.model';
import hooks from './hello-world.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    ['hello-world']: HelloWorld & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
  };

  // Initialize our service with any options it requires
  app.use('/hello-world', new HelloWorld(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('hello-world');

  service.hooks(hooks);
}
