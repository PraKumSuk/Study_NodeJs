const fs = require('fs');

//All funcs of fs has 2 types of methods
//for e.g., but always use async methods
//fs.access
//fs.accessSync


//Example 1 showing Sync
//to view all files of current dir i.e. ./
//const fileList = fs.readdirSync('./');
//console.log(fileList);

//Example 2 showing Async + Valid dir
//to view all files of current dir i.e. ./
//fs.readdir('./', <callbackfunctionhere> )

fs.readdir('./', function (err, fileList) {
    if (err)
        console.log('Error', err);
    else
        console.log('Result is : ', fileList);
});

//Example 3 showing Async + InValid dir
//Comment previous ex 2 to see this work
fs.readdir('ajfkdsfkd', function (err, fileList) {
    if (err)
        console.log('Error', err);
    else
        console.log('Result is : ', fileList);
});
