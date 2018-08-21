// Implement my own bind method
function myBind(func, context) {
  var prevArgs = [].slice.call(arguments, 2); // Assume we have an access to call method
  return function() { // closure created
    var currArgs = [].slice.call(arguments);
    var combinedArgs = [].concat(prevArgs, currArgs);
    return func.apply(context, combinedArgs); // Assume we have an access to apply method
  };
}

var func1 = function(message) {
	this(message);
}

// Test from browser (alert() isn't accessible from node.js env)
var func2 = myBind(func1, alert);
console.log(func2('Test from browser(client)'))

// Test from node.js with console.log()
var log = console.log;
var func3 = myBind(func1, log);
func3('Test from node.js')
