const EventEmitter = require('events'); //returns a class not an object like http

//Import your Module 
const SPKLogger = require('./logger');
//Create an object
const spklogger = new SPKLogger();

// An arrow function => is used instead of
// specifiying function explicity along with arg
//Set a Listener to listen to an event
spklogger.on('spkEventOccured', (arg) => {
    console.log('Bro the spkEventOccured ......');
});

//Invoke your method to do task 1 and then trigger an event
spklogger.log('message')
