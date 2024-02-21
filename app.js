// function makePerson(first, last, age){
//     return {
//         first: first,
//         last: last,
//         age: age,
//         isAlive: true
//     }
// }

function makePerson(first, last, age){
    return {
        first, last, age,
        isAlive: true
    }
}

// const mathStuff = {
//     x: 200,
//     add: function(a,b){
//         return a + b;
//     },
//     square: function(a){
//         return a * a;
//     }
// }

// cant use arroy functions in these objects, just avoid it.

const mathStuff = {
    x: 200,
    add(a,b){
        return a + b;
    },
    square(a){
        return a * a;
    }
}