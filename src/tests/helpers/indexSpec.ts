import supertest from 'supertest';
import app from './../../index';
import request from 'supertest';

supertest(app);

describe('GET /', function (): void {
  it('server when respond with 200', async (): Promise<void> => {
    await request(app).get('/').expect(200);
  });
});

describe('GET /images', (): void => {
  it('server when respond with 200', async (): Promise<void> => {
    await request(app)
      .get('/images?filename=fjord&height=100&width=200')
      .expect(200);
  });
});

describe('GET /images', (): void => {
  it('server when respond with 500 when file not exist', async (): Promise<void> => {
    await request(app)
      .get('/images?filename=anything&height=100&width=200')
      .expect(500);
  });
});
