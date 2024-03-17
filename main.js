document.addEventListener("DOMContentLoaded", function() {
    const categoriesBlock = document.querySelector(".categories");
    const productsBlock = document.querySelector(".products");
    const productInfoBlock = document.querySelector(".product-info");

    const categories = ["Електроніка", "Одяг", "Книги"];
    const products = {
        "Електроніка": ["Смартфон", "Ноутбук", "Планшет"],
        "Одяг": ["Футболка", "Джинси", "Куртка"],
        "Книги": ["Роман", "Поезія", "Фантастика"]
    };

    function displayCategories() {
        categoriesBlock.innerHTML = "";
        categories.forEach(category => {
            const categoryElement = document.createElement("div");
            categoryElement.textContent = category;
            categoryElement.classList.add("category");
            categoriesBlock.appendChild(categoryElement);
        });
    }

    function displayProducts(category) {
        productsBlock.innerHTML = "";
        products[category].forEach(product => {
            const productElement = document.createElement("div");
            productElement.textContent = product;
            productElement.classList.add("product");
            productsBlock.appendChild(productElement);
        });
    }

    function displayProductInfo(product) {
        productInfoBlock.innerHTML = `<p>Інформація про товар: ${product}</p><button class="buy-btn">Купити</button>`;
    }

    function buyProduct() {
        alert("Товар куплений");
        displayCategories();
        productInfoBlock.innerHTML = "";
    }

    categoriesBlock.addEventListener("click", function(event) {
        if (event.target.classList.contains("category")) {
            const category = event.target.textContent;
            displayProducts(category);
        }
    });

    productsBlock.addEventListener("click", function(event) {
        if (event.target.classList.contains("product")) {
            const product = event.target.textContent;
            displayProductInfo(product);
        }
    });

    productInfoBlock.addEventListener("click", function(event) {
        if (event.target.classList.contains("buy-btn")) {
            buyProduct();
        }
    });

    displayCategories();
});
