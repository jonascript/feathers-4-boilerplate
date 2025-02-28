import { Application } from '../declarations';

import helloWorld from './hello-world/hello-world.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(helloWorld);
}
