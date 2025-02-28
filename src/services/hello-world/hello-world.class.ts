import { Service, SequelizeServiceOptions } from 'feathers-sequelize';
import { Application } from '../../declarations';

declare global {
  export interface HelloWolrdData {
    id: string;
    carrier: string;
    eta: Date;
    billOfLadingNumber: string;
    containerIds: string[];
    invoiceNumber: string;
    packingListNumber: string;
    totalValue: number;
  }
}

export class HelloWorld extends Service<HelloWolrdData> {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
  }
}
