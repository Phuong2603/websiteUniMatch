// File: main.js

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Dùng Fetch API để gọi nội dung file navbar.html
    fetch('navbar.html')
        .then(response => {
            if (!response.ok) throw new Error('Không thể tải Navbar');
            return response.text();
        })
        .then(data => {
            // 2. Bơm nội dung HTML lấy được vào div "trạm chờ"
            document.getElementById('navbar-placeholder').innerHTML = data;

            // 3. LOGIC TỰ ĐỘNG ĐÁNH DẤU MENU ACTIVE (THÔNG MINH)
            // Lấy tên file hiện tại trên thanh địa chỉ trình duyệt (VD: 'dashboard.html')
            const currentPath = window.location.pathname.split('/').pop() || 'dashboard.html';
            
            // Tìm tất cả các thẻ <a> bên trong navbar vừa được bơm vào
            const navLinks = document.querySelectorAll('#navbar-placeholder .nav-link');
            
            navLinks.forEach(link => {
                // Lấy giá trị của thuộc tính href (VD: 'dashboard.html', 'chat.html')
                const linkHref = link.getAttribute('href');
                
                // Nếu href khớp với tên file hiện tại, thêm class active bôi xanh
                if (linkHref === currentPath) {
                    link.classList.add('active', 'text-primary');
                } else {
                    link.classList.remove('active', 'text-primary');
                }
            });
        })
        .catch(error => {
            console.error('Lỗi hệ thống:', error);
        });
});