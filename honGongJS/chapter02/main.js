// 문제3
// const numberInput = prompt("숫자를 입력해주세요");

// console.log(numberInput);

// let cmToInch = Number(numberInput) * 0.393701

// console.log(`${numberInput}cm는 ${cmToInch}inch 입니다.`)


// 문제4

const numberInput = prompt("원의 반지름을 입력해주세요", 4)

let number = Number(numberInput)

function areaOfaCircle(x){
    return console.log(3.14 * x * x)
}

function circumference(x){
    return console.log(2 * 3.14 * x);

}

areaOfaCircle(number)
circumference(number)