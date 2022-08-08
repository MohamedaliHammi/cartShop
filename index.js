const shop = document.getElementById('shop');
let shopCart = [];
let shopItemData = [
{
    id: "ProductNum1",
    name: "casual shirt",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    price: '$42',
    img: "./images/img-1.jpg"

}
, {
    id: "ProductNum2",
    name: "T- shirt",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    price: '$20',
    img: "./images/img-2.jpg"
 
}, {
    id: "productNum3",
    name: "casual shirt",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    price: '$300',
    img: "./images/img-3.jpg"
}, {
    id: "ProductNum4",
    name: "leather",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    price: '$150',
    img: "./images/img-4.jpg"
}]



let generateProducts = () =>{

    return (shop.innerHTML = shopItemData.map((product) => {
        //* object destruction 
        let {id, name, price, desc, img} = product;
        return `<div id="product-id-${id}" class="item"><img width="220" src="${img}" alt="clothes">
        <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h2>${price}</h2>
                <div class="buttons">
                    <i onclick = "decrement(${id})" class="bi bi-bag-dash-fill"></i>
                    <div onclick='update()' id="${id}" class="quantity">0</div>
                    <i onclick = "increment(${id})" class="bi bi-cart-plus-fill"></i></div>
    
            </div>
        </div>
    </div>`

    }).join(""));
    
};

generateProducts();

let increment = (id) =>{
    let selectedProduct = id;
    let search = shopCart.find((product) => product.id === selectedProduct.id);

    if(search === undefined){
        shopCart.push({
            id: selectedProduct.id,
            item: 1,
            });
        
    }else {
        search.item += 1;
    }
   
// console.log(shopCart);
update(selectedProduct.id);
};


let decrement = (id) => {
    let selectedProduct = id;
    let search = shopCart.find((product) => product.id === selectedProduct.id);


    //* to avoid item being negative number
    if(search.item === 0) return;
        
    else {
        search.item -= 1;
    }
   
  //console.log(shopCart)
  update(selectedProduct.id);
};

//* update the quantity increament or decreament
let update = (id) => {
    //* search is an object
    let search = shopCart.find((product => product.id === id));
    console.log(search.item);
   document.getElementById(id).innerHTML = search.item;
   calculateProducts()
};

//* to add the quantity together
let calculateProducts = () =>{
    let cartIcon = document.getElementById('cartAmount');
    cartIcon.innerHTML = shopCart.map((product) => product.item).reduce((product, nextProduct) => product + nextProduct, 0);
}











//! Notes
//* map navigate the object
//* find search for specific carac
//* product is the i who goes in all the keys in the objects
//* reduce 
