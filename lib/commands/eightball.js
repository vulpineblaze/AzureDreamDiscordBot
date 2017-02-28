var Clapp = require('../modules/clapp-discord');

module.exports = new Clapp.Command({
  name: "8ball",
  desc: "rolls an 8ball about your question",
  fn: (argv, context) => {
    // This output will be redirected to your app's onReply function
    var strings = [ 'No', 
                    'Naw', 
                    'Nope',
                    'Maybe',
                    'Could Be',
                    'Try Again in 5 minutes',
                    'Try Again Later',
                    'Probably So',
                    'Could Be Yes',
                    'Yeah Maybe',
                    'Yeah Sure',
                    'Yes',
                    'Sure Thing',
                    'Definately Yes'];

    var randomIndex = Math.floor(Math.random() * strings.length);

    var randomString = strings[randomIndex];
    var question = context.msg.content.split(' ').slice(2).join(' ');
    return question + ' ?\n\n' + ' The 8ball says:  ' + randomString;
  },
  
});






// module.exports = new Clapp.Command({
//   name: "dance",
//   desc: "bot dances i guess",
//   fn: (argv, context) => {
//     // This output will be redirected to your app's onReply function
//     return 'Foo was executed!' + ' The value of testarg is: ' + argv.args.testarg +
//       (argv.flags.testflag ? ' testflag was passed!' : '');
//   },
//   args: [
//     {
//       name: 'testarg',
//       desc: 'A test argument',
//       type: 'string',
//       required: false,
//       default: 'testarg isn\'t defined'
//     }
//   ],
//   flags: [
//     {
//       name: 'testflag',
//       desc: 'A test flag',
//       alias: 't',
//       type: 'boolean',
//       default: false
//     }
//   ]
// });

