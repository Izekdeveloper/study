/*
DOM và Sự kiện (Event)
Hiểu và thao tác với DOM trong JavaScript. Biết cách truy cập, thay đổi nội dung HTML và
xử lý sự kiện tương tác bằng JavaScript

#34. DOM là gì? Giới thiệu cơ bản về DOM
1. DOM là gì?
DOM (viết tắt của Document Object Model) là một mô hình dạng cây đại diện cho cấu
trúc của một trang web.
- Khi trình duyệt tải trang HTML, nó phân tích (parse) nội dung HTML và tạo ra một
mô hình dạng cây DOM.
- Mỗi thẻ HTML trong tài liệu sẽ được chuyển thành một "đối tượng" (object) mà
JavaScript có thể truy cập và thao tác.

hieu don gian thi dom la nhung gi duoc hien thi trong cua so element(inspector neu dung firefox) khi nhan f12

DOM trông như thế nào?
Giả sử bạn có đoạn HTML sau:
<!DOCTYPE html>
<html>
<head>
<title>Trang web của hoidanit</title>
</head>
<body>
<h1>Chào bạn!</h1>
<p>Đây là một đoạn văn bản.</p>
</body>
</html>

DOM sẽ biểu diễn như một cây phân cấp:
Document(dom)
└── html
├── head
│ └── title
└── body
├── h1
└── p
2.DOM cho phép làm gì?
Với DOM, bạn có thể dùng JavaScript để:

✅ Truy cập và đọc nội dung của các phần tử HTML
✅ Thay đổi nội dung hoặc thay đổi kiểu hiển thị (CSS)
✅ Thêm, xóa phần tử HTML
✅ Lắng nghe sự kiện người dùng: click chuột, nhập dữ liệu, rê chuột, v.v.
*/
