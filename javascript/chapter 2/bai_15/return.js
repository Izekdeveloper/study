/*
#20. Keyword Return
1. return là gì?
return là từ khóa dùng để kết thúc hàm và trả về một giá trị ra ngoài.

Khi JavaScript gặp return, hàm sẽ dừng thực thi ngay lập tức.

Cú pháp:
function tenHam() {
return giaTriTraVe;
}
// nếu không return giá trị thì sao ?
*/
console.log("bai 15")
const sum = (a,b,c) => {
    console.log("run before")
    if(typeof a,b,c !== "number" ){
        console.log("run empty return")
        //return; //void //undefined
        return "fuck"; //0
    }
    return a + b + c;
    console.log("run after")
}
console.log(sum("fuck",2,3))