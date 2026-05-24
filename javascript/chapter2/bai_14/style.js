/*
#19. Arrow function (Extra)
Tài liệu:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

//todo
Về Immediately Invoked Function Expression / anonymous function:
https://developer.mozilla.org/en-US/docs/Glossary/IIFE
*/
//normal function
console.log("bai 14")
/*
function sum(a,b) {
    return a + b;
}

// arrow function
(a,b) => { //anonymous function ( function ko ten )
    return (a + b);
} // ko chay duoc vi ko co ten nen ko goi duoc


//arrow function variant (nhuoc diem la ko kiem soat duoc khi nao no chay nen phai gan ten cho no de de kiem soat)
(function (){ //ko co ten
    console.log("say hi chay ngay di")
})(); // function IIDFE function nay co dau () o cuoi tuc la function viet xong tu chay luon ko can goi ten nhu normal function
*/

//const sum
const sum = (a,b) => {
    return a + b;
}
console.log(sum(10,5))