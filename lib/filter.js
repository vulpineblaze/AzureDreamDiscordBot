var fs = require('fs');

function readLines(input, func) {
  var remaining = '';

  input.on('data', function(data) {
    remaining += data;
    var index = remaining.indexOf('\n');
    while (index > -1) {
      var line = remaining.substring(0, index);
      remaining = remaining.substring(index + 1);
      func(line);
      index = remaining.indexOf('\n');
    }
  });

  input.on('end', function() {
    if (remaining.length > 0) {
      func(remaining);
    }
  });
}

function func(data) {
  console.log('Line: ' + data);
  substrings.push(data);
}

var input = fs.createReadStream('lib/filtered.txt');
readLines(input, func);


var substrings = [];

var check_msg = function(msg){
   // console.log("check_msg:"+msg);
   var retval = false;
   if (new RegExp(substrings.join("|")).test(msg)) {
    // At least one match
    	retval = true;
	}
   return retval;
}

module.exports = {
   check_msg : check_msg
}