//문제 4
// const a = Number(prompt("숫자를 입력해주세요",""))

// if (a > 0) {
//     alert("입력한 숫자는 양수입니다.")
// } else if (a < 0) {
//     alert("입력한 숫자는 음수입니다.")
// } else if ( a == 0) {
//     alert("입력한 숫자는 0 입니다.")
// }

//문제 5
const a = Number(prompt("0이 아닌 숫자를 입력해주세요.", ""))
let rest = a % 2

if (rest == 0){
    alert("짝수입니다.")
} else if (rest == 1) {
    alert("홀수입니다.")
} else {
    alert("ERROR: 양수를 입력해주세요.")
}
