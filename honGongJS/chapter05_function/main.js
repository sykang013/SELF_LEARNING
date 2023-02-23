function min(first, ...rest) {
    let output
    let items

    if(Array.isArray(first)) {
        output = first[0] //52
        items = first //[배열]
        console.log(output,"1")
        console.log(items,"2")
    } else if (typeof(first) === 'number'){
        output = first
        items = rest
        console.log(output,"3")
        console.log(items,"4")
    }

    for (const item of items) {
        if (output > item) {
            output = item
        }
    }
    return output
}

let array = [52,273,402,92,14,293,60]

console.log(`min(배열): ${min(array)}`);
console.log(`min(숫자, ...): ${min(52,273,402,92,14,293,60)}`);