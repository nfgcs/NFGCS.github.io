// 管理后台的 JavaScript 代码

const productForm = document.getElementById('productForm');
const existingProducts = document.getElementById('existingProducts');
const successMessage = document.getElementById('successMessage');

// 清空默认商品
let products = [];

// 添加商品功能
productForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const productName = document.getElementById('productName').value.trim();
    const productPrice = document.getElementById('productPrice').value.trim();
    const productImage = document.getElementById('productImage').value.trim();

    // 输入验证
    if (!productName || !productPrice || !productImage) {
        alert("请填写所有字段！");
        return;
    }

    const newProduct = {
        name: productName,
        price: parseFloat(productPrice),
        image: productImage
    };

    products.push(newProduct);
    renderProducts();
    productForm.reset();
    successMessage.textContent = "商品添加成功！";
    setTimeout(() => {
        successMessage.textContent = "";
    }, 3000); // 3秒后清除消息
});

// 渲染现有商品
function renderProducts() {
    existingProducts.innerHTML = '';
    products.forEach((product, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" />
            ${product.name} - ￥${product.price}
            <button onclick="removeProduct(${index})">删除</button>
        `;
        existingProducts.appendChild(li);
    });
}

// 删除商品功能
function removeProduct(index) {
    products.splice(index, 1);
    renderProducts();
}

// 清空商品列表功能
function clearProducts() {
    products = [];
    renderProducts();
}

// 绑定清空按钮
document.getElementById('clearButton').addEventListener('click', clearProducts); 