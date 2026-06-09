/*
#35. Truy cập phần tử HTML trong DOM
Khi bạn muốn thay đổi nội dung, thêm màu sắc, ẩn/hiện một phần tử, hoặc xử lý khi
người dùng tương tác (như click, nhập dữ liệu...), bạn cần lấy được phần tử HTML đó
thông qua DOM.

Một số cách phổ biến để truy cập phần tử
✅ document.getElementById(id)
Dùng để lấy phần tử có id cụ thể.
Trả về duy nhất một phần tử (hoặc null nếu không tìm thấy).
html:
<p id="intro">Chào mừng!</p>
js:
const para = document.getElementById("intro");
console.log(para); // in ra phần tử <p>

✅ document.querySelector(selector)
Dùng để tìm phần tử đầu tiên khớp với CSS selector (id, class, tag, v.v.).

const firstNote = document.querySelector(".note");
console.log(firstNote); // chỉ in ra phần tử đầu tiên có class="note"

✅ document.querySelectorAll(selector)
Dùng để lấy tất cả phần tử khớp với selector, trả về NodeList (giống mảng).
const allNotes = document.querySelectorAll(".note");
console.log(allNotes.length);
*/
console.log("BAi 27")

//get id
const element = document.getElementById("username")
console.log(element)

// get class
const myDiv = document.querySelector(".helloWorld")
console.log(myDiv)

//get span
const allMyDiv = document.querySelectorAll(".helloWorld")
console.log(allMyDiv)