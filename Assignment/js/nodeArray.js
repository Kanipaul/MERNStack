var input=[6,[8],[[22]],[[10,12]]];

var output=flatten(input);


function flatten(input) {
    var arr = [];
    for(var i = 0; i < input.length; i++) {
        if(Array.isArray(input[i])) {
            arr = arr.concat(flatten(input[i]));
        } else {
            arr.push(input[i]);
        }
    }
    return arr;
}
