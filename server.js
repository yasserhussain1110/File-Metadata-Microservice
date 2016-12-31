var express = require('express');
var multer = require('multer');
var upload = multer();

var app = express();

app.use(express.static('public'));

app.post('/get-file-size', upload.single('document'), function (req, res, next) {
  if (req.file) {
    res.json({
      size: req.file.size
    });
  } else {
    res.status(400).end("File field cannot be empty.");
  }
});

app.listen(process.env.PORT || 8080);

