const supertest = require('supertest')

request = supertest('http://localhost:3000')

request
  .get('/')
  .expect(200, function(err) {
    console.log(err)
  })
  .expect('Content-Type', 'text/html; charset=utf-8')
