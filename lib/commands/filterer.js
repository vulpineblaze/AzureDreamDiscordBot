var Clapp = require('../modules/clapp-discord');

module.exports = new Clapp.Command({
  name: "filter",
  desc: "Add to the filter",
  fn: (argv, context) => {
    // // This output will be redirected to your app's onReply function
    // var bad_word = context.msg.content.split(' ').slice(2).join(' ');
    // var fs = require('fs');
    // fs.appendFile('lib/filtered.txt', bad_word+"\n", function (err) {
    //     if(err) {
    //         return console.log(err);
    //     }
    //     fs.close(log, function(err) {
    //     if (err) throw err;
    //       console.log('It\'s saved!');
    //     });
    // });

    // return bad_word + ' has been added to the filter!';
    return ' This function is currently disabled ';
  }
  
});

