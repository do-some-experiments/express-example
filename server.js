const app = require('./app');

app.set('port', process.env.PORT || 4000);

const server = app.listen(app.get('port'), () => {
  console.log(`Running on ${server.address().port}`);
});
