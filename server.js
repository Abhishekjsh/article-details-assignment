const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.static(__dirname + '/build'));

app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'build/index.html'), function (err) {
      if (err) {
         res.status(500).send(err)
      }
   })
})

app.listen(port, () => {
   console.log('Server is up on', port);
});
