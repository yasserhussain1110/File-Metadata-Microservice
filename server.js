var express = require('express');
var app = express();

app.get('/api/latest/imagesearch', function (req, res) {
  sendLatestSearchItems(res);
});



app.listen(process.env.PORT || 8080);

