console.log("JavaScript Connected");

const cartButton = document.querySelector("#cart-button");
const cartSidebar = document.querySelector(".cart-sidebar");
const closeButton = document.querySelector("#close-cart");

cartButton.addEventListener("click", function(){
    cartSidebar.classList.add("open");
});

closeButton.addEventListener("click", function(){
    cartSidebar.classList.remove("open");
});

let cartCount = 0;

const countDisplay = document.querySelector("#cart-count");
const addButtons = document.querySelectorAll(".product-card button");

addButtons.forEach(function(button){
    button.addEventListener("click", function(){
        cartCount++;
        countDisplay.textContent = cartCount;
    });
});

const themeButton = document.querySelector("#theme-toggle");

themeButton.addEventListener("click", function(){
    document.body.classList.toggle("dark");
})

function updateCart(){
    cartItems.innerHTML = "";

    let total = 0;

    cartButton.forEach(function(item){
        const product = document.createElement("p");

        product.textContent =  `${item.name} - ${item.price}`;
        cartItems.appendChild(product);
        total += Number(item.price.replace("$",""));
    });

    const totalElement = document.creaateElement("h3");
    
    totalElement.textContent = 'Total: $${total}';
    cartItems.appendChild(totalElement);
}