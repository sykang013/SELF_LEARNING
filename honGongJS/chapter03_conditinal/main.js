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
// const a = Number(prompt("0이 아닌 숫자를 입력해주세요.", ""))
// let rest = a % 2

// if (rest == 0){
//     alert("짝수입니다.")
// } else if (rest == 1) {
//     alert("홀수입니다.")
// } else {
//     alert("ERROR: 양수를 입력해주세요.")
// }

//문제 6
// const month = Number(prompt("월을 입력해주세요",""))

// if (month >= 3 && month <= 5){
//     alert("봄입니다.")
// } else if(month >= 6 && month <= 8){
//     alert("여름입니다.")
// } else if(month >= 9 && month <= 11){
//     alert("가을입니다.")
// } else if(month == 12 || month <= 2){
//     alert("겨울입니다.")
// }

/* --------------------------------- /챕터 3-2 -------------------------------- */

//문제 2

// const rawInput = prompt("태어난 해를 입력해주세요", "")
// const year = Number(rawInput)
// const rest = year % 12

// let result 
// switch(rest){
//     case 0: result = "원숭이"; break;
//     case 1: result = "닭"; break;
//     case 2: result = "개"; break;
//     case 3: result = "돼지"; break;
//     case 4: result = "쥐"; break;
//     case 5: result = "소"; break;
//     case 6: result = "호랑이"; break;
//     case 7: result = "토끼"; break;
//     case 8: result = "용"; break;
//     case 9: result = "뱀"; break;
//     case 10: result = "말"; break;
//     case 11: result = "양"; break;
// }

// alert(`${year}년에 태어났다면 ${result} 띠입니다.`)