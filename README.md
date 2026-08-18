# 🎓 UniMatch - Nền tảng Tìm trọ & Ghép phòng an toàn cho Sinh viên

**UniMatch** là một ứng dụng Web Frontend (Interactive Prototype) được thiết kế nhằm giải quyết bài toán tìm kiếm chỗ ở an toàn cho sinh viên. Dự án tích hợp giao diện mô phỏng công nghệ định danh E-KYC và thuật toán AI Matching để đề xuất những người bạn ở ghép có độ tương thích lối sống cao nhất.

🔗 **Xem Demo trực tiếp tại:** [https://phuong2603.github.io/websiteUniMatch/home.html]

## ✨ Tính năng nổi bật
* **Hệ thống AI Matching (Mô phỏng):** Thu thập 10 thói quen lối sống qua bài trắc nghiệm và đề xuất bạn ghép phòng tương thích (Hiển thị % phù hợp).
* **Định danh E-KYC:** Giao diện xác thực bằng Email sinh viên (`.edu.vn`) và số CCCD để đảm bảo môi trường an toàn, chính chủ 100%.
* **Quản lý & Tìm kiếm phòng trọ:** Trải nghiệm tìm kiếm bằng bộ lọc nâng cao (Khu vực, Giá, Tiện ích). Trang chi tiết phòng trực quan với thư viện ảnh, đánh giá từ người dùng và bản đồ khu vực.
* **Tương tác thời gian thực (UI/UX):** Giao diện nhắn tin (Chat) mượt mà, quản lý danh sách yêu thích và tin đăng cá nhân chuyên nghiệp.

## 🛠️ Công nghệ sử dụng
* **Ngôn ngữ:** HTML5, CSS3, JavaScript (Vanilla/ES6)
* **Framework:** Bootstrap 5 (Xây dựng bố cục Responsive, tương thích trên cả Mobile và Desktop)
* **Kiến trúc Code:** Tách component độc lập (`navbar`, `footer`) và dùng Fetch API để tái sử dụng code, tối ưu hiệu suất bảo trì.

## 🚀 Luồng trải nghiệm người dùng (User Flow)
1. `Trang chủ` ➔ `Đăng nhập / Đăng ký`
2. `Xác thực E-KYC` ➔ `Trắc nghiệm lối sống` ➔ `AI trả kết quả Ghép phòng`
3. `Khám phá (Dashboard)` ➔ `Xem chi tiết Phòng trọ / Hồ sơ bạn ghép`
4. `Tương tác:` Nhắn tin (Chat), Lưu yêu thích, Quản lý tin đăng cá nhân.

## 📂 Cấu trúc thư mục chính
- `home.html`: Trang đích (Landing Page)
- `dashboard.html`: Bảng tin khám phá phòng và người ở ghép
- `room_detail.html`: Giao diện chi tiết phòng trọ
- `chat.html`: Giao diện nhắn tin trực tiếp
- `my_profile.html` & `cus_profile.html`: Quản lý hồ sơ cá nhân và xem hồ sơ công khai
- `multiple_choice.html`: Hệ thống trắc nghiệm AI
- `main.js` & `style.css`: Xử lý logic dùng chung và tinh chỉnh giao diện

---
*Dự án Đồ án Web Frontend - Phát triển với sự chú trọng cao nhất vào Trải nghiệm người dùng (UX) và Giao diện trực quan (UI).*