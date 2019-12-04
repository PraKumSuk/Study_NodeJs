// Any scripts written will be wrapped in a
// function called the module wrapper function
// by default as below but you should not explicitly 
// specify that as commented below

//(function (exports, require, module, __filename, __dirname) {
console.log('Execution of script started............will see whats it up to')
    console.log(__filename);
    console.log(__dirname);

    function tellHi(message) {
        console.log(message);
    }

module.exports = tellHi;

console.log('Execution of script completed.......')

//})
