const EventEmitter = require('events');

var url = "http://www.spklogger.com/logthis/"

// Defining a Class
class SPKLogger extends EventEmitter {

    // Defining a function member
    log(message) {
        //task 1
        console.log(message); 

        //now raise an event
        this.emit('spkEventOccured', { id: 222, url: 'arggg.com', eventDesc: 'abc def ghi' });
    }
}

//Setting class as export
//so that can be used in other modules
//module is a arg of wrapper module func
module.exports = SPKLogger;

