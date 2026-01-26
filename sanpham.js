
   const allProducts = [
    // bánh cakes
    { ten: "CHANTILLY CAKE", gia: "485,000vnđ", anh: "sanpham/cakes/Chantilly-Cake.png", category: "Cakes"},
    { ten: "LES OPERA CAKE", gia: "485,000vnđ", anh: "sanpham/cakes/Les-Opera-Cake.png", category: "Cakes"},
    { ten: "MANGO TANGO CAKE", gia: "485,000vnđ", anh: "sanpham/cakes/Mango-Tango-Cake.png", category: "Cakes"},
    { ten: "CHOCOLATE RICHE CAKE", gia: "485,000vnđ", anh: "sanpham/cakes/Chocolate-Riche-Cake.png", category: "Cakes"},
    { ten: "DARK FOREST GATEAU", gia: "485,000vnđ", anh: "sanpham/cakes/Dark-Forest-Gateau.png", category: "Cakes"},
    { ten: "HAZENUTL CAKE", gia: "485,000vnđ", anh: "sanpham/cakes/Hazelnuts-Cake.png", category: "Cakes"},
    { ten: "CORN CAKE VANILA", gia: "590,000vnđ", anh: "sanpham/cakes/Corn-Cake-Vanila.png", category: "Cakes"},
    { ten: "FRESH DREAM RAINBOW", gia: "560,000vnđ", anh: "sanpham/cakes/Fresh-Dream-Rainbow.png", category: "Cakes"},
    { ten: "BLUEBERRY CAKE", gia: "560,000vnđ", anh: "sanpham/cakes/Banh-kem-blueberry.png", category: "Cakes"},
    // bánh Slices cake
    { ten: "CUP CHANTILLY", gia: "79,000vnđ", anh: "sanpham/slices-cake/Cup-Chantilly.png", category: "Slices-Cakes"},
    { ten: "CORN SLICE", gia: "59,000vnđ", anh: "sanpham/slices-cake/Corn-Slice.jpg", category: "Slices-Cakes"},
    { ten: "CUP LES OPERA SLICE", gia: "79,000vnđ", anh: "sanpham/slices-cake/Cup-Les-Opera-Slice.png", category: "Slices-Cakes"},
    { ten: "CUP BLUEBERRY", gia: "79,000vnđ", anh: "sanpham/slices-cake/Cup-BlueBerry.jpg", category: "Slices-Cakes"},
    { ten: "BEARY VANILLA", gia: "59,000vnđ", anh: "sanpham/slices-cake/Beary-Vanilla.png", category: "Slices-Cakes"},
    { ten: "BEARY MATCHA", gia: "59,000vnđ", anh: "sanpham/slices-cake/Beary-Matcha.png", category: "Slices-Cakes"},
    { ten: "BEARY BERRY", gia: "59,000vnđ", anh: "sanpham/slices-cake/Beary-Berry.png", category: "Slices-Cakes"},
    { ten: "BEARY FOREST", gia: "59,000vnđ", anh: "sanpham/slices-cake/Beart-Forest.png", category: "Slices-Cakes"},
    { ten: "CUP DARK FOREST", gia: "79,000vnđ", anh: "sanpham/slices-cake/Cup-Dark-Forest.png", category: "Slices-Cakes"},

    // BÁNH COOKIE
    { ten: "HỘP BÁNH QUY TẾT", gia: "226,000vnđ", anh: "sanpham/cookie/Hop-banh-quy-tet.png", category: "Cookie"},
    { ten: "GREEN PEA COOKIES", gia: "99,000vnđ", anh: "sanpham/cookie/Green-Pea-Cookies.jpg", category: "Cookie"},
    { ten: "PANDAN COCONUT COOKIES", gia: "99,000vnđ", anh: "sanpham/cookie/Pandan-Coconut-Cookies.jpg", category: "Cookie"},
    { ten: "CASHEW NUT COOKIES", gia: "99,000vnđ", anh: "sanpham/cookie/Cashew-Nut-Cookies.jpg", category: "Cookie"},
    { ten: "PINEAPPLE COOKIES", gia: "99,000vnđ", anh: "sanpham/cookie/Pineapple-Cookies.jpg", category: "Cookie"},

    // BÁNH EURO BREAD
    { ten: "SUNFLOWER", gia: "68,000vnđ", anh: "sanpham/euro-bread/Sunflower.png", category: "Euro-Bread"},
    { ten: "SUNFLOWER SET 4 PCS", gia: "68,000vnđ", anh: "sanpham/euro-bread/Sunflower-set-4-pcs.png", category: "Euro-Bread"},
    { ten: "KRAFTKORN LOAF", gia: "45,000vnđ", anh: "sanpham/euro-bread/Loaf-Kraftkorn.png", category: "Euro-Bread"},
    { ten: "DARK RYE LOAF", gia: "35,000vnđ", anh: "sanpham/euro-bread/Loaf-Dark-Rye.png", category: "Euro-Bread"},
    { ten: "GOURMENT FRUIT LOAF", gia: "112,000vnđ", anh: "sanpham/euro-bread/Gourment-Fruit-Loaf.png", category: "Euro-Bread"},
    { ten: "BAGUETTE FRENCH", gia: "35,000vnđ", anh: "sanpham/euro-bread/Baguette-French.png", category: "Euro-Bread"},

    // bánh dry cake
    { ten: "BANANA CAKE", gia: "149,000vnđ", anh: "sanpham/dry-cakes/Banana-Cake.png", category: "Dry-Cakes"},
    { ten: "JAPAN LIGHT CHEESE", gia: "149,000vnđ", anh: "sanpham/dry-cakes/Japan-Light-Cheese.png", category: "Dry-Cakes"},
    { ten: "CRATER CHEESE HONEY", gia: "69,000vnđ", anh: "sanpham/dry-cakes/Crater-Cheese-Honey.png", category: "Dry-Cakes"},
    { ten: "GREENTEA SWISSROLL", gia: "35,000vnđ", anh: "sanpham/dry-cakes/GreenTea-Swissroll.png", category: "Dry-Cakes"},
    { ten: "ANGEL DRYCAKES", gia: "38,000vnđ", anh: "sanpham/dry-cakes/Angel-Drycake.png", category: "Dry-Cakes"},
    { ten: "CHOCOLATE SWISSROLL", gia: "35,000vnđ", anh: "sanpham/dry-cakes/Chocolate-Swissroll.png", category: "Dry-Cakes"},
    { ten: "TIGER SWISSROLL", gia: "35,000vnđ", anh: "sanpham/dry-cakes/Tiger-Swissroll.png", category: "Dry-Cakes"},
    { ten: "PARMESAN CHEESE CAKE", gia: "69,000vnđ", anh: "sanpham/dry-cakes/Parmesan-Cheese-Cake.png", category: "Dry-Cakes"},

    // bánh toast (Đã sửa để khớp hoàn toàn với folder toasts của bạn)
    { ten: "DARK RYE TOAST", gia: "60,000vnđ", anh: "sanpham/toasts/Dark-Rye-Toast.png", category: "Toasts"},
    { ten: "BUN CHEESE 3PCS", gia: "35,000vnđ", anh: "sanpham/toasts/Bun-Cheese-3pcs.png", category: "Toasts"},
    { ten: "BUN COCKTAIL 6PCS", gia: "59,000vnđ", anh: "sanpham/toasts/Bun-Cocktail-6pcs.png", category: "Toasts"},
    { ten: "CHOCOLATE TOAST", gia: "60,000vnđ", anh: "sanpham/toasts/Chocolate-Toast.png", category: "Toasts"},
    { ten: "KAYA TOAST", gia: "60,000vnđ", anh: "sanpham/toasts/Kaya-Toast.png", category: "Toasts"},
    { ten: "MOUNT GREENTEA TOAST", gia: "60,000vnđ", anh: "sanpham/toasts/Mount-Greentea-Toast.png", category: "Toasts"},
    { ten: "MULTIGRAIN TOAST", gia: "60,000vnđ", anh: "sanpham/toasts/Multigrain-Toast.png", category: "Toasts"},

    // NƯỚC (Đã kiểm tra tên file viết hoa trong ảnh)
    { ten: "TRÀ DÂU TƯƠI", gia: "60,000vnđ", anh: "sanpham/drink/DRINK1.jpg", category: "Drink"},
    { ten: "MATCHA LATTE", gia: "60,000vnđ", anh: "sanpham/drink/DRINK2.png", category: "Drink"},
    { ten: "CÀ PHÊ SỮA", gia: "60,000vnđ", anh: "sanpham/drink/DRINK3.jpg", category: "Drink"},
    { ten: "COOKIES BẠC HÀ ĐÁ XAY", gia: "60,000vnđ", anh: "sanpham/drink/DRINK4.jpg", category: "Drink"},
    { ten: "HỒNG TRÀ CHANH DÂY", gia: "60,000vnđ", anh: "sanpham/drink/DRINK5.jpg", category: "Drink"},

    // BUNS
    { ten: "MOMOJI", gia: "40,000vnđ", anh: "sanpham/buns/Buns1.png", category: "Buns"},
    { ten: "PILLOW RAISIN", gia: "29,000vnđ", anh: "sanpham/buns/Buns2.png", category: "Buns"},
    { ten: "CHEESE LAVA CROISSANT", gia: "22,000vnđ", anh: "sanpham/buns/Buns3.png", category: "Buns"},
    { ten: "SPICY FLOSS", gia: "39,000vnđ", anh: "sanpham/buns/buns4.jpg", category: "Buns"},
    { ten: "HAZELNUT CACAO", gia: "39,000vnđ", anh: "sanpham/buns/Buns5.png", category: "Buns"},

    // OTHER
    { ten: "BLUE FIREWORKS", gia: "25,000vnđ", anh: "sanpham/other/Other1.png", category: "Other"},
    { ten: "PLATES (SET 10)", gia: "25,000vnđ", anh: "sanpham/other/Other2.png", category: "Other"},
    { ten: "CONE HAT", gia: "20,000vnđ", anh: "sanpham/other/other3.png", category: "Other"},
    { ten: "CANDLES", gia: "25,000vnđ", anh: "sanpham/other/other4.png", category: "Other"},
    { ten: "CANDLE HPBD", gia: "35,000vnđ", anh: "sanpham/other/Other5.png", category: "Other"},
];


// Quản lý số lượng hiển thị (Thêm đủ các mục để tránh lỗi)
let counts = {
    "Buns": 4,
    "Toasts": 4,
    "Dry-Cakes": 4,
    "Cakes": 4,
    "Slices-Cakes": 4,
    "Drink": 4,
    "Cookie": 4,
    "Other": 4,
    "Euro-Bread": 4
};

let cart = []; // Khai báo giỏ hàng

// Hàm vẽ sản phẩm
function renderSection(categoryName) {
    const idName = "grid-" + categoryName; 
    const gridElement = document.getElementById(idName);

    if (!gridElement) return;

    const filtered = allProducts.filter(p => p.category === categoryName);
    const displayList = filtered.slice(0, counts[categoryName]);

   gridElement.innerHTML = displayList.map((p, index) => `
    <div class="product-item">
        <img src="${p.anh}" alt="${p.ten}" style="width:100%; height:200px; object-fit:cover;">
        <h3>${p.ten}</h3>
        <p class="price">${p.gia}</p>

        <div class="quantity-selector">
            <button onclick="changeQty('${categoryName}', ${index}, -1)">-</button>
            <input type="number" id="qty-${categoryName}-${index}" value="1" min="1" readonly>
            <button onclick="changeQty('${categoryName}', ${index}, 1)">+</button>
        </div>

        <button class="btn-cart" onclick="prepareAddToCart('${categoryName}', ${index})">
            Thêm vào giỏ hàng
        </button>
    </div>
`).join('');

    updateButtonVisibility(categoryName, filtered.length);
}

// 3. Hàm xử lý tăng giảm số lượng tại chỗ
function changeQty(cat, idx, delta) {
    const input = document.getElementById(`qty-${cat}-${idx}`);
    let currentVal = parseInt(input.value);
    currentVal += delta;
    if (currentVal < 1) currentVal = 1;
    input.value = currentVal;
}

// 4. Hàm chuẩn bị dữ liệu gửi vào giỏ hàng
function prepareAddToCart(cat, idx) {
    const filtered = allProducts.filter(p => p.category === cat);
    const product = filtered[idx];
    const quantity = parseInt(document.getElementById(`qty-${cat}-${idx}`).value);

    addToCart(product, quantity);
}

// 5. Hàm Giỏ hàng (Sửa lại để dùng localStorage)
function addToCart(product, quantity) {
    // Lấy giỏ hàng cũ từ máy khách (nếu có)
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Kiểm tra xem món này đã tồn tại chưa
    const existingItem = cart.find(item => item.ten === product.ten);

    if (existingItem) {
        existingItem.soLuong += quantity;
    } else {
        // Thêm thuộc tính soLuong vào đối tượng sản phẩm
        cart.push({ ...product, soLuong: quantity });
    }

    // Lưu lại vào localStorage để trang giohang.html đọc được
    localStorage.setItem('cart', JSON.stringify(cart));
    
    alert(`Đã thêm ${quantity} x ${product.ten} vào giỏ hàng!`);
}



// Hàm cuộn trang (Filter)
function filter(categoryName) {
    const targetElement = document.getElementById("scroll-" + categoryName);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Hàm xem thêm
function loadMore(categoryName) {
    counts[categoryName] += 4;
    renderSection(categoryName);
}

// Hàm ẩn nút xem thêm
function updateButtonVisibility(categoryName, totalItems) {
    const grid = document.getElementById("grid-" + categoryName);
    const btnContainer = grid.nextElementSibling; 
    
    if (counts[categoryName] >= totalItems) {
        btnContainer.style.display = 'none';
    } else {
        btnContainer.style.display = 'block';
    }
}

// Khởi tạo khi load trang
window.onload = function() {
    Object.keys(counts).forEach(cat => renderSection(cat));
};

window.addEventListener('load', function() {
    // Kiểm tra xem trên link web có cái mã #scroll-... không
    if (window.location.hash) {
        const hash = window.location.hash; // Lấy cái đoạn #scroll-Buns chẳng hạn
        const target = document.querySelector(hash);
        
        if (target) {
            // Đợi một chút để ảnh và dữ liệu kịp render rồi mới cuộn
            setTimeout(() => {
                target.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }, 300); // Chờ 300ms cho chắc ăn
        }
    }
});



//hàm của html trang chủ
document.addEventListener('DOMContentLoaded', () => {
    // 1. Lấy tham số từ URL (ví dụ: ?type=Drink)
    const urlParams = new URLSearchParams(window.location.search);
    const categoryFilter = urlParams.get('type');

    // 2. Nếu có tham số type, thực hiện lọc ngay lập tức
    if (categoryFilter) {
        // Giả sử hàm lọc sản phẩm của bạn tên là filterProduct(category)
        // Hoặc nếu bạn dùng hàm render, hãy truyền tham số đó vào
        renderProducts(categoryFilter); 
        
        // Cập nhật giao diện menu (nếu cần để người dùng biết đang ở mục nào)
        console.log("Đang hiển thị danh mục:", categoryFilter);
    }
});