var stringPrinter = function functionName( starterString) {
  //$('#output').text(starterString);
  $('#output').append("<p>"+starterString+"</p>");
}

var funnySentence = function(noun, adjective, verb, adverb) {
  var sentence = "The " + adjective + " " + noun + " " + verb + " " + adverb + ".";

  stringPrinter(sentence);
}
var doThis = function() {
  //while loop should run 5x
  var i = 0;
  while ( i < 10) {
      funnySentence("silly", "monkey", "hoots", "wildly");
      i++;
  }

}
document.querySelector('#target').addEventListener('click', doThis);
document.querySelector('#target').addEventListener('click', doThis);
//doThis();

// jquery code to do the same thing
$("#target").on('click', function() {
console.log('you clicked the dive with the id target');
})

$('div').click(function(){
  $('div p'.show().css('color', 'red',))
})
