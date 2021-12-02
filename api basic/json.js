let shohan = {name: 'shohan', roll: 1802017, dept: 'cse'};
console.log(shohan);
let stringifiedShohan = JSON.stringify(shohan);
console.log(stringifiedShohan);
let backToObjectShohan = JSON.parse(stringifiedShohan);
console.log(backToObjectShohan);