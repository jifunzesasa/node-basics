const util = require('util')

async function hello(){
    return 'Hello world';
}

const callbackFunction = util.callbackify(hello);

callbackFunction((err, resp)=> {
    if (err) throw err;

    console.log(resp);
})