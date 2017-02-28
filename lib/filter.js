var fs = require('fs');

var do_once=true;

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

function re_read_lines(){
	substrings = [];
	var input = fs.createReadStream('lib/filtered.txt');
	readLines(input, func);
	return;
}



var substrings = [];

var check_msg = function(msg){
   // // console.log("check_msg:"+msg);
   // if(do_once){
   // 	re_read_lines();
   // 	do_once=false;
   // }

   var retval = false;
   if (new RegExp(substrings.join("|")).test(msg)) {
    // At least one match
    	var test= new RegExp(substrings.join("|")).test(msg)
    	console.log("regex var is:"+test+" ,from msg:"+msg);
    	retval = true;
	}
   return retval;
}

module.exports = {
   check_msg : check_msg,
   re_read_lines : re_read_lines
}