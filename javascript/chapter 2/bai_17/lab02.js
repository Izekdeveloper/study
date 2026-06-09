/*
#22. Bài Tập Lab 02
Yêu cầu:
1.Tạo hàm tinhTrungBinh(toan, van, anh)
- Hàm nhận vào 3 điểm số (sử dụng tham số).
- Trả về điểm trung bình (sử dụng return).

2.Tạo hàm xepLoai(diemTB)
Dựa vào điểm trung bình, xếp loại học sinh:
Từ 9 → "Xuất sắc"
Từ 8 và nhỏ hơn 9 → "Giỏi"
Từ 6.5 và nhỏ hơn 8→ "Khá"
Còn lại → "Trung bình"
Dùng if / else if / else để thực hiện

Output:
Cho trước 3 biến:
const diemToan = 9;
const diemVan = 8;
const diemAnh = 7;

Gọi các hàm trên để tính điểm trung bình và in ra kết quả sau:
Điểm trung bình: 8.0
Xếp loại: Giỏi
*/
const diemToan = 9;
const diemVan = 8;
const diemAnh = 7;
const tinhTrungBinh = (diemToan,diemVan,diemAnh) => {
    return (diemToan+diemAnh+diemVan) /3;
}
const xeploai = (diemtb) => {
    if (diemtb >=9){
        return "xuat sac";
    }
    else if (diemtb >=8 && diemtb <9){
        return "Gioi";
    }
    else if (diemtb >=6.5 && diemtb <8) {
        return "kha";
    }
    else {
        return "trung binh";
    }
}
const mytb = tinhTrungBinh(diemToan,diemVan,diemAnh);
console.log(`
Điểm trung bình: ${mytb}
Xếp loại: ${xeploai(mytb)}
    `)