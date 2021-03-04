import request from 'supertest';
import { app } from './server';

describe('GET /user', function() {
  test('responds with json', function(done) {
    request(app)
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
