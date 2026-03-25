const products = [
    { id: 1, name: "Classic Chocolate Chip", price: 2.50, emoji: "🍪" },
    { id: 2, name: "Oatmeal Raisin", price: 2.25, emoji: "🌾" },
    { id: 3, name: "Double Fudge Brownie", price: 3.00, emoji: "🍫" },
    { id: 4, name: "Macadamia Nut", price: 3.50, emoji: "🥥" },
    { id: 5, name: "Snickerdoodle", price: 2.00, emoji: "🥨" },
    { id: 6, name: "Red Velvet", price: 3.25, emoji: "🍒" }
];

let cartCount = 0;

function init() {
    const productList = document.getElementById('product-list');
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'cookie-card';
        
        card.innerHTML = `
            <div class="cookie-image">${product.emoji}</div>
            <div class="cookie-info">
                <h3>${product.name}</h3>
                <p class="price">$${product.price.toFixed(2)}</p>
                <button class="add-btn" onclick="addToCart('${product.name}')">Add to Cart</button>
            </div>
        `;
        
        productList.appendChild(card);
    });
}

function addToCart(productName) {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    // Simple visual feedback
    const btn = event.target;
    const originalText = btn.innerText;
    btn.innerText = "Added!";
    btn.style.backgroundColor = "#4CAF50";
    
    setTimeout(() => {
        btn.innerText = originalText;
        btn.style.backgroundColor = "";
    }, 1000);
    
    console.log(`Added ${productName} to cart.`);
}

// Initialize the store when the page loads
document.addEventListener('DOMContentLoaded', init);