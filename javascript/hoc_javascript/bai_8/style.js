/*
#12. Bài Tập Lab 01
Yêu cầu:
Tạo các biến sau với const hoặc let (chọn phù hợp):

fullName: tên đầy đủ (string)

birthYear: năm sinh (number)

isStudent: true/false

Tính tuổi hiện tại dựa trên birthYear.
Gợi ý: tính năm hiện tại, sử dụng:
const today = new Date();
const currentYear = today.getFullYear();

In ra console theo format:
Tên: [fullName]
Tuổi: [calculatedAge]
Sinh viên: [Đúng/Sai]
*/
console.log ("bai 8 \nlab 1")
const fullName = "thong";
const birthYear = 2009;
const isStudent = true;
const today = new Date();
const currentYear = today.getFullYear();
const birthYear1 = currentYear-birthYear;

const info = `Ten: ${fullName}
tuoi: ${birthYear1}
sinh vien: ${isStudent} `

console.log(info)
/*
Ten: thong
tuoi: 17
sinh vien: true 
*/