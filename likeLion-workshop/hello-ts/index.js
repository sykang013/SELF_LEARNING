"use strict";
var 이름;
이름 = false;
var 예제;
예제 = '나도 TS월드에선 타입이야';
var 유저;
유저 = { 아이디: '123', 이름: '김철수', 아바타: '123' };
var 유저합침;
유저합침 = { 아이디: '123', 아바타: '123', 이름: "김영희" };
var 함수 = function (숫자일걸) {
    if (!숫자일걸) {
        throw new TypeError('숫자만 넣어야됨');
    }
    return 숫자일걸 + 1;
};
함수(0);
함수(1);
