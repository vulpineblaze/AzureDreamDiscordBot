var Clapp = require('../modules/clapp-discord');

module.exports = new Clapp.Command({
  name: "dance",
  desc: "bot dances i guess",
  fn: (argv, context) => {
    // This output will be redirected to your app's onReply function
    var strings = ['harlems shakes', 'does the douggie', 'dabs like a madman'];

    var randomIndex = Math.floor(Math.random() * strings.length);

    var randomString = strings[randomIndex];
    return 'Dance was executed!' + ' The bot ' + randomString;
  },
  args: [
    {
      name: 'testarg',
      desc: 'A test argument',
      type: 'string',
      required: false,
      default: 'testarg isn\'t defined'
    }
  ],
  flags: [
    {
      name: 'testflag',
      desc: 'A test flag',
      alias: 't',
      type: 'boolean',
      default: false
    }
  ]
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

