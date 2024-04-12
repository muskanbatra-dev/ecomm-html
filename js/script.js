let searchForm = document.querySelector(".search-form");

let saerchbtn = document.querySelector("#search-btn");

saerchbtn.addEventListener("click", () => {
  console.log("selected");
  searchForm.classList.toggle("active");
});

let shoppingCart = document.querySelector(".shopping-cart");

let cartBtn = document.querySelector("#cart-btn");

cartBtn.addEventListener("click", () => {
  console.log("selected");
  shoppingCart.classList.toggle("active");
});
