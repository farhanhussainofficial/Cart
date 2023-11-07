var product = [
    {
        id : 0,
        image : "assets/download1.jpeg",
        title : "Samsung",
        price : 30,

    },
    {
        id : 1,
        image : "assets/download2.jpeg",
        title : "Oppo",
        price : 25,

    },
    {
        id : 2,
        image : "assets/download3.jpeg",
        title : "Realme",
        price : 20,

    },
    {
        id : 3,
        image : "assets/download.jpeg",
        title : "Vivo",
        price : 20,

    },
];

var categories = [...new Set(product.map((item)=>
    {return item}))]
    var i = 0;
document.getElementById('root').innerHTML = categories.map((item)=>
    {
        var {image, title, price} = item;
        return(
            `<div class='box'>
                <div class='imgBox'>
                    <img class='images' src=${image}>
                </div>
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>PKR ${price}.00</h2>`+
                    "<button onclick='addToCart("+(i++)+")'>Add to cart</button>"+
                `</div>
            </div>`
        )
    }).join('')

    var cart = [];

    function addToCart(f){
        cart.push({...categories[f]});
        displayCart();
    }

    function displayCart() {
        var j = 0;
        var total = 0;
        var discounted = "Your discount is 10%";
    
        if (cart.length === 0) {
            document.getElementById('cartItems').innerHTML = "Your cart is empty";
            document.getElementById("total").innerHTML = "PKR 0.00";
        } else {
            document.getElementById('cartItems').innerHTML = cart.map((item) => {
                var { image, title, price } = item;
                total += price;
                if (total >= 60) {
                    total -= (total * 0.1); 
                }
    
                return (
                    `<div class='cartItem1'>
                        <div class='rowImg'>
                            <img class='rowing' src=${image}>
                        </div>
                        <p style='font-size: 12px;'>${title}</p>
                        <h2 style='font-size: 15px;'>PKR ${price}.00</h2>` +
                    "<span class='solid' onclick='deElement(" + (j++) + ")'><img class='delete' src='assets/trash.png'></span></div>"
                );
            }).join('');
    
            document.getElementById("total").innerHTML = "PKR " + total.toFixed(2);
        }
    
        document.getElementById('count').innerHTML = cart.length;
    }
    function deElement(index) {
        cart.splice(index, 1);
        displayCart();
    }
    
    
    