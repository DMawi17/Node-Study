// => GLOBAL

console.log(global);

global.setTimeout(() => {
    console.log("in the timeout, clearing the interval");
    clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log("in the interval");
}, 1000);

console.log(`the abs path of the dir --> \n ${__dirname}`);
console.log(`the abs path of the file --> \n ${__filename}`);
