// 模拟商品数据
const products = [];

// 渲染商品列表
function renderProducts() {
    const productsContainer = document.getElementById('productsContainer');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">￥${product.price}</p>
            <button class="add-to-cart" onclick="addToCart(${product.id})">加入购物车</button>
        `;
        
        productsContainer.appendChild(productCard);

        // 添加动画效果
        setTimeout(() => {
            productCard.classList.add('show');
        }, 100); // 延迟100毫秒后添加类
    });
}

// 加入购物车功能
function addToCart(productId) {
    alert(`商品 ${productId} 已添加到购物车！`);
}

// 页面加载完成后渲染商品
document.addEventListener('DOMContentLoaded', renderProducts); 