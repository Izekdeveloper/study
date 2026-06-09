/*
#41. Local Storage (Extra)
1.Local Storage là gì?
Local Storage là một phần của Web Storage API, cho phép bạn lưu trữ dữ liệu ngay
trong trình duyệt của người dùng.
Đặc điểm:
- Dữ liệu không bị mất khi reload hoặc tắt trình duyệt.
- Lưu trữ dạng key-value (khóa-giá trị), kiểu chuỗi (string).

Cú pháp:
Phương thức Mô tả
localStorage.setItem(key, value) Lưu dữ liệu (value phải là chuỗi)
localStorage.getItem(key) Lấy dữ liệu theo key
localStorage.removeItem(key) Xóa dữ liệu theo key
localStorage.clear() Xóa toàn bộ dữ liệu đã lưu trong Local Storage
//todo: convert object => json (stringify/parse)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/J
SON/stringify
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/J
SON/parse
*/
console.log("bai 34")
const Btn = document.getElementById("submit")
const input = document.getElementById("name")
//get item after f5
const prevElement = document.getElementById("previous")
const prevName = localStorage.getItem("fuck")
if(prevName){
    prevElement.innerHTML = `<b>${prevName}</b>`
}

Btn.addEventListener("click",() => {
    //console.log(input.value)
    document.getElementById("message").innerHTML =`<b>${input.value}</b>`
    //local storage
    localStorage.setItem("fuck", input.value)
})