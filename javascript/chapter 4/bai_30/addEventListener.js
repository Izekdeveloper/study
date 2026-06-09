/* 
#37. Lắng nghe sự kiện với addEventListener
Tài liệu:
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

1.addEventListener( ) là gì?
addEventListener( ) là phương thức tiêu chuẩn và hiện đại để gắn sự kiện vào phần tử
HTML.
Khi sự kiện xảy ra (người dùng click, nhập, rê chuột...), trình duyệt sẽ gọi hàm xử lý bạn
đã chỉ định.
Cú pháp: element.addEventListener("eventName", function);
- element: phần tử HTML bạn muốn gắn sự kiện.
- "eventName": tên sự kiện, ví dụ "click", "input", "mouseover".
- function: hàm xử lý khi sự kiện xảy ra
Ví dụ:
<button id="myBtn">Bấm vào đây</button>
<script>
const button = document.getElementById("myBtn");
button.addEventListener("click", function () {
alert("Bạn vừa nhấn nút!");
});
</script>
*/
console.log("bai 30")

const element = document.getElementById("buttonClick")

const handleClickBtn = () => {
    console.log("you click a button")
}
element.addEventListener("click",handleClickBtn)//function o day ko de dau ()
//dau () la noi voi javascript hay thuc thi function ngay lap tuc nhung trong event chung
// ta khong can phai thuc thi function
console.log(element)