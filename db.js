const mongoose = require('mongoose');

// useNewUrlParser
var options = {
   connectTimeoutMS: 5000,
   useNewUrlParser: true,
   useUnifiedTopology: true,
  };

mongoose.connect('mongodb+srv://jojin889:argo123@cluster0.2i8si.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    options,
    function(err) {
     if (err) {
       console.log(`error, failed to connect to the database because --> ${err}`);
     } else {
       console.info('*** Database argonaute connection : Success ***');
     }
    }
);

module.exports = mongoose;