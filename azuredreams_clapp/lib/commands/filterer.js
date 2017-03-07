var Clapp = require('../modules/clapp-discord');

var filter = require('../filter.js');

var filter_file = 'lib/filtered.txt';
module.exports = new Clapp.Command({
  name: "filter",
  desc: "Add to the filter",
  fn: (argv, context) => {
    // This output will be redirected to your app's onReply function
    var bad_word = context.msg.content.split(' ').slice(2).join(' ');
    var fs = require('fs');
    var logStream = fs.createWriteStream(filter_file, {'flags': 'a'});
    // use {'flags': 'a'} to append and {'flags': 'w'} to erase and write a new file
    logStream.end(bad_word+"\n");
    filter.re_read_lines();
    // fs.appendFile(filter_file, bad_word+"\n", function (err) {
    //     if(err) {
    //         return console.log(err);
    //     }
    //     fs.close(filter_file, function(err) {
    //     if (err) throw err;
    //       console.log('It\'s saved!');
    //     });
    // });

    return bad_word + ' has been added to the filter!';
  }
  
});

