const addButtons = document.querySelectorAll(".add-to-cart-btn");
const cartCount = document.getElementById("cart-count");
const cartContent = document.getElementById("cart-content");
const totalPriceElement=document.getElementById("total-price");
let itemsInBag = 0;
let currentTotal =0;

const addToBag = (event) => {
    const productCard= event.target.closest(".product-card");
    const price = parseFloat(productCard.getAttribute("data-price"));
    const productName =productCard.querySelector('h3').innerText;
    itemsInBag +=1;
    currentTotal += price;
    if (itemsInBag === 1) {
        cartContent.innerHTML ="";

    }
    const itemHTML =
    `<div class ="cart-item" style="display: flex,justify-content: 5px>
        <p>${productName}</p>
        <p>$${price}</p>
    </div>`;
    cartContent.insertAdjacentHTML('beforeend', itemHTML);
    cartCount.innerText = itemsInBag;
    totalPriceElement.innerText = currentTotal.toFixed(2);
    document.getElementById('cart-drawer').classList.add("open");
};
addButtons.forEach(btn => {
    btn.addEventListener("click", addToBag);
});



    

