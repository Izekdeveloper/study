/*#39. Thay đổi CSS bằng JavaScript
1.Sử dụng style
Mỗi phần tử HTML trong DOM đều có thuộc tính .style để bạn thay đổi trực tiếp các
thuộc tính CSS.
Cú pháp:
element.style.tênThuộcTínhCSS = "giá trị mới";

Lưu ý: Tên thuộc tính CSS dạng kebab-case như background-color sẽ được chuyển sang
camelCase trong JavaScript: backgroundColor.
Ví dụ:
<p id="title">Xin chào!</p>
<button onclick="changeColor()">Đổi màu chữ</button>
<script>
function changeColor() {
const p = document.getElementById("title");
p.style.color = "red";
}
</script>

2. Sử dụng classList
Thêm hoặc xoá class bằng .classList
Thay vì thay đổi từng thuộc tính .style, bạn có thể thêm class CSS định nghĩa sẵn.
element.classList.add("ten-class");
element.classList.remove("ten-class");
*/
console.log("bai 32")
const myBtnElement = document.getElementById("myBtn")
const myTextElement = document.getElementById("colorText")
const backBtnElement = document.getElementById("changeBtn")

console.log(myBtnElement,myTextElement,backBtnElement)

myBtnElement.addEventListener("click",() => {
    console.log("click me")
    myTextElement.style.color = "red"
    myTextElement.style.backgroundColor = "green"

//class add 
myTextElement.classList.add("fuck")
    //{key : value}
})

backBtnElement.addEventListener("click",() => {
    console.log("click me")
    myTextElement.style.color = "black"
    myTextElement.style.backgroundColor = "unset"


//class remove
myTextElement.classList.remove("fuck")
    //{key : value}
})