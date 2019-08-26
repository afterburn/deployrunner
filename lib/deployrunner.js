const httpserve = require('./httpserve');

function deployrunner(settings) {
  console.log(settings);

  const app = httpserve();
  app.get('/', (req, res) => {
    res.end('hello');
  });

  app.listen(8080, () => console.log('deployrunner listening on http://localhost:8080'));
}

module.exports = deployrunner;