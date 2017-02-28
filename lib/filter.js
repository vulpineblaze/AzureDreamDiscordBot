var f1 = function(){
   console.log("f1");
}
var f2 = function(){
   console.log("f2");
}
var check_msg = function(msg){
   // console.log("check_msg:"+msg);
   var retval = false;
   if(msg=="Test" | msg=="test"){
   		retval = true;
   }
   return retval;
}

module.exports = {
   check_msg : check_msg,
   f1 : f1,
   f2 : f2
}