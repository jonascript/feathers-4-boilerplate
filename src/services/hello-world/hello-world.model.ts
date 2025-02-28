// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../../declarations';
import { HookReturn } from 'sequelize/types/hooks';
import { v4 as uuidv4 } from 'uuid';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const helloWorld = sequelizeClient.define(
    'hello-world',
    {
      id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
        defaultValue: () => {
          return uuidv4();
        },
      },
      carrier: {
        type: DataTypes.STRING,
      },
      eta: {
        type: DataTypes.DATE,
      },
      billOfLadingNumber: {
        type: DataTypes.STRING,
      },
      containerIds: {
        type: DataTypes.JSON,
      },
      invoiceNumber: {
        type: DataTypes.STRING,
      },
      packingListNumber: {
        type: DataTypes.STRING,
      },
      totalValue: {
        type: DataTypes.NUMBER,
      },
    },
    {
      underscored: true,
      hooks: {
        beforeCount(options: any): HookReturn {
          options.raw = true;
        },
      },
    }
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (helloWorld as any).associate = function ({}): void {
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
  };

  return helloWorld;
}
