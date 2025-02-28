import { HookContext } from '@feathersjs/feathers';
import { populate } from 'feathers-hooks-common';

export default {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [
      function (context: HookContext) {
        // SQLLite supports JSONB as of 3.44.0 but Sequelize doesn't yet support this so we have to convert the string back to an object.
        if (context?.result?.eta) {
          context.result.eta = new Date(context.result.eta).toISOString();
        }

        if (context?.result?.containerIds) {
          context.result.containerIds = JSON.parse(
            context?.result?.containerIds
          );
        }
      },

      //
      // for populating related entities
      //
      // populate({
      //   schema: {
      //     include: [
      //       {
      //         service: 'my-service',
      //         nameAs: 'things',
      //         parentField: 'id',
      //         childField: 'thing',
      //         asArray: true,
      //       },
      //     ],
      //   },
      // }),
    ],
    find: [
      function (context: HookContext) {
        if (context.result.data) {
          context.result.data = context.result.data.map((item) => {
            return { ...item, containerIds: JSON.parse(item.containerIds) };
          });
        } else {
          context.result = context.result.map((item) => {
            return { ...item, containerIds: JSON.parse(item.containerIds) };
          });
        }
      },
    ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
