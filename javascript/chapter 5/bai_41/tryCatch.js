/*
Xử lý lỗi với try/catch/finally
1. Lỗi (Error) là gì?
Lỗi là những vấn đề xảy ra trong quá trình thực thi chương trình, khiến chương trình bị
dừng hoặc chạy sai.
Ví dụ:
- Truy cập biến không tồn tại
- Gọi API thất bại
- Chia cho 0 (trong một số ngôn ngữ)
- Cú pháp sai

2.Sử dụng try/catch
try {
// code có thể gây lỗi
} catch (error) {
// xử lý lỗi ở đây
} finally {
// luôn chạy sau cùng (nếu cần)
}
*/

console.log("bai 41")


const doSomeThing = () => {
    const a = 10, b = 0;

    if (b ===0 ){
    throw new Error("thuc hien chia cho 0")
}
return a / b;
}

try { //goi ham dosomething
    doSomeThing();
}
catch (error){ //in ra loi neu co
    console.log("co loi xay ra ",error)
}
finally {
    console.log("run final") //thuc thi code du co loi hay ko loi
}