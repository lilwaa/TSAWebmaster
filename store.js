var cart = [];
var cost = 0;


function display(){
    var stringCart = cart.toString();
    var roundedCost = cost.toFixed(2)
    //remember to round
    var costString = roundedCost.toString();
    document.getElementById('cart').innerHTML=stringCart;
    document.getElementById('cost').innerHTML="Total Cost: $" + costString;
}

function tempFunction(){
    if(window.confirm("Add a thermometer to cart")){
        cart.push("Thermometer");
        cost += 19.99;
    };
    display();
}

function maskFunction(){
    if(window.confirm("Add face mask to cart")){
        cart.push("Face Masks");
        cost += 24.99;
    }
    display();
}

function vitCFunction(){
    if(window.confirm("Add vitamin C to cart")){
        cart.push("Vitamin C");
        cost += 5.99
    }
    display();
}

function motrinFunction(){
    if(window.confirm("Add motrin to cart")){
        cart.push("Motrin");
        cost +=5.99;
    }
    display();
}

function claritinFunction(){
    if(window.confirm("Add claritin to cart")){
        cart.push("Claritin");
        cost += 9.99;
    }
    display();
}
function coldEezeFunction(){ 
    if(window.confirm("Add Cold Eeze to cart")){
        cart.push("Cold Eeze");
        cost += 6.99;
    }
    display();
}

function wipesFunction(){
    if(window.confirm("Add wipes to cart")){
        cart.push("Wipes");
        cost += 7.99;
    }
    display();
}

function EmergenCFunction(){ 
    if(window.confirm("Add EmergenC to cart")){
        cart.push("EmergenC");
        cost += 9.99;
    }
    display();
}

function soapFunction(){
    if(window.confirm("Add soap to cart")){
        cart.push("Soap");
        cost += 3.99;
    }
    display();
}