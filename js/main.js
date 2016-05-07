$(document).ready(function() {
  var source   = $("#pikado-scoreboard").html();

  Handlebars.registerHelper('compare', function(lvalue, rvalue, options) {

      if (arguments.length < 3)
          throw new Error("Handlerbars Helper 'compare' needs 2 parameters");

      var operator = options.hash.operator || "==";

      var operators = {
          '==':       function(l,r) { return l == r; },
          '===':      function(l,r) { return l === r; },
          '!=':       function(l,r) { return l != r; },
          '<':        function(l,r) { return l < r; },
          '>':        function(l,r) { return l > r; },
          '<=':       function(l,r) { return l <= r; },
          '>=':       function(l,r) { return l >= r; },
          'typeof':   function(l,r) { return typeof l == r; }
      }

      if (!operators[operator])
          throw new Error("Handlerbars Helper 'compare' doesn't know the operator "+operator);

      var result = operators[operator](lvalue,rvalue);

      if( result ) {
          return options.fn(this);
      } else {
          return options.inverse(this);
      }

  });

  Handlebars.registerHelper("math", function(lvalue, operator, rvalue, options) {
      lvalue = parseFloat(lvalue);
      rvalue = parseFloat(rvalue);

      return {
          "+": lvalue + rvalue,
          "-": lvalue - rvalue,
          "*": lvalue * rvalue,
          "/": lvalue / rvalue,
          "%": lvalue % rvalue
      }[operator];
  });

  var template = Handlebars.compile(source);
  var data = {
    "getTitle": "Naslov"
  }

  var data = { game:
   { numberOfPlayers: 2,
     players: [ [Object], [Object] ],
     rules:
      { gameType: 1,
        rounds: 1,
        quatro: false,
        score: 301,
        parcheesi: false,
        runAndGun: false,
        runAndGunTime: 60,
        playOff: false,
        doubleIn: false,
        doubleOut: false,
        masterOut: false,
        equalOption: false,
        endOption: false,
        teamRules: null },
     uniqueId: '2f08d6b7-2597-c8bd-93f6-2eee83c2ad77-1462628523975',
     gameStatus:
      { players: [Object],
        round: 1,
        currentPlayer: 0,
        currentDart: 1,
        gameOver: false,
        message: '',
        roundStartScore: [Object] },
     logToConsole: false,
     darts: [],
     playerApproached: false,
     awaitApproach: false,
     maxNumberOfPlayers: 8,
     dartsPerRound: 3,
     gameStatusHistory: [],
     playOffHistory: [],
     playOffStarted: false,
     playoffGame: null,
     isPlayoff: false,
     timer: '2016-05-07T13:42:03.975Z',
     secondsElapsed: 0,
     secondsRemaining: 60,
     timerId: 0,
     isEqualStarted: false,
     equalRound: 0,
     equalPlayers: [],
     isEndStarted: false,
     endPlayers: [],
     equalEndHistory: [] },
  players:
   [ { name: 'Host',
       displayName: 'Host',
       score: 301,
       numbersToHit: [],
       id: '0',
       totalScore: 0,
       avgStatistic: 0 },
     { name: 'ante',
       displayName: 'ante',
       score: 301,
       numbersToHit: [],
       id: 1,
       totalScore: 0,
       avgStatistic: 0 } ],
 title: 301,
  isRunAndGun: false,
  timer: 60,
  currentPlayer:
   { name: 'Host',
     score: 296,
     id: '0',
     dartsRemaining: 3,
     roundScores: [ 301 ] },
  currentRound: 1,
  currentRoundScore: 5,
  avgStatisticName: 'PPD',
  dart1: '',
  dart2: '',
  dart3: ''
};

console.log(data.title);

  $("#content").html(template(data));
});
