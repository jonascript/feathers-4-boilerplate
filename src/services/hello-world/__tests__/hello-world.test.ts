import app from '../../../app';

describe("'hello world' service", () => {
  it('registered the service', () => {
    const service = app.service('hello-world');
    expect(service).toBeTruthy();
  });

  describe('Creating a new hello world record', () => {
    let helloWorld: HelloWolrdData;
    afterAll(async () => {
      await app.service('hello-world').remove(helloWorld.id);
    });
    it('can create a hello world record', async () => {
      helloWorld = <HelloWolrdData>await app.service('hello-world').create({
        carrier: 'COSCO',
        eta: new Date(),
      });

      const savedTracking = await app.service('hello-world').get(helloWorld.id);

      expect(savedTracking).toBeTruthy();
      expect(savedTracking).toMatchObject({
        carrier: helloWorld.carrier,
        eta: helloWorld.eta,
      });
    });
  });
  describe('Creating a new hello world record', () => {
    let helloWorld: HelloWolrdData;
    afterAll(async () => {
      await app.service('hello-world').remove(helloWorld.id);
    });
    it('can create associate documents to a hello world record', async () => {
      helloWorld = <HelloWolrdData>await app.service('hello-world').create({
        carrier: 'COSCO',
        eta: new Date(),
      });

      const savedTracking = await app.service('hello-world').get(helloWorld.id);

      expect(savedTracking.carrier).toBeTruthy();
      expect(savedTracking.carrier).toEqual('COSCO');
    });
  });
});
