const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('dist'));

app.use('/',require('./routes/homepage'));

app.use('/api/yesNoWtf',require('./routes/yesnowtf'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../dist/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })
app.listen(8080, () => console.log('Listening on port 8080!'));

