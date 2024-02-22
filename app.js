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

// computed property names

// 'periwinkle' '9c88ff'
// 'bright ube' ' D6A3E8'

const color = {
    periwinkle: '9c88ff',
    '9c88ff': 'periwinkle'
};

// function makeColor(name, hex){
//     return {
//     name : hex,
//     hex: name
// };
// }


// function makeColor(name, hex){
//     const color = {};
//     color[name] = hex;
//     color[hex] = name;
//     return color;
// }

function makeColor(name, hex){
    return {
        [name] : hex,
        [hex] : name
    };
}


// shorthand version of bellow
const mystery = {
    [6 +7]: 'thirteen'
}

// const obj = {};
// obj[6+7] = 'thirteen';

// this is essentially what mystery is doing
function _defineProperty(obj, key, value) {
    obj[key] = value;
    return obj;
}