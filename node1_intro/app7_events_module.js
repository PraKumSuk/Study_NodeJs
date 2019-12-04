
const EventEmitter = require('events'); //returns a class not an object like http
const emitter = new EventEmitter(); // so create a object

// Example 1
// First Set/Register a Listener
// create a listener of below template
//emitter.on('eventName', callback_functionhere)
emitter.on('spkEventOccured', function () {
    console.log('Bro the spkEventOccured ......');
}
);

// Then Emit or raise an event
emitter.emit('spkEventOccured'); // to raise/emit an event

// NOTE : if the listener is set after the emit instruction
// the event vl not be listened, as it does not know any function
// that it needs to trigger

// Example 2 - Passing object along with event
emitter.on('spkEventOccured2', function (arg) {
    console.log('Bro the spkEventOccured2 and received an event object along ......', arg);
}
);
emitter.emit('spkEventOccured2', {id : 222, url : 'arggg.com', eventDesc : 'abc def ghi' } );