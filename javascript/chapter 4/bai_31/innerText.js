/*
#38. Thay đổi nội dung của phần tử HTML
innerText cho phép bạn lấy hoặc thay đổi phần nội dung dạng chữ mà người dùng thực
sự nhìn thấy trên trang web (có tính đến CSS)
Ví dụ:
<p id="intro">Chào bạn!</p>
<script>
const p = document.getElementById("intro");
p.innerText = "Chào mừng đến với khóa học @hoidanit!";
</script>

innerHTML cho phép bạn lấy hoặc thay đổi nội dung HTML bên trong phần tử, bao gồm
cả thẻ lồng bên trong.
<p id="greeting">Xin chào!</p>
<script>
const p = document.getElementById("greeting");
p.innerHTML = "<strong>Chào bạn,</strong> <em>học lập trình với hoidanit!</em>";
</script>
*/
console.log("bai 31")
const myBtnElement = document.getElementById("myBtn")
const backBtnElement = document.getElementById("backBtn")
const myTextElement = document.getElementById("myText")
console.log(myBtnElement)
console.log(myTextElement)
//innerText
                  //                   👇 arrow function
myBtnElement.addEventListener("click",() => {
    console.log("click a button")
    //myTextElement.innerText ="Just the content"
//innerHTML
    myTextElement.innerHTML = "<strong>Chào bạn,</strong> <em>học lập trình với hoidanit!</em>";

})

backBtnElement.addEventListener("click",() => {
    console.log("click a button")
    myTextElement.innerText ="bai 31"
})
