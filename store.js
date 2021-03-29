var cart = [];

function display(){
    var stringCart = cart.toString();
    document.getElementById('cart').innerHTML=stringCart; 
}

function tempFunction(){
    cart.push("Thermometer");
    window.confirm("Add a thermometer to cart");
    display();
}

function maskFunction(){
    cart.push("Face Masks");
    window.confirm("Add face mask to cart");
    display();
}

function vitCFunction(){
    cart.push("Vitamin C");
    window.confirm("Add vitamin C to cart");
    display();
}

function motrinFunction(){
    cart.push("Motrin");
    window.confirm("Add motrin to cart");
    display();
}

function claritinFunction(){
    cart.push("Claritin");
    window.confirm("Add claritin to cart");
    display();
}
function coldEezeFunction(){
    cart.push("Cold Eeze");
    window.confirm("Add Cold Eeze to cart");
    display();
}

function wipesFunction(){
    cart.push("Wipes");
    window.confirm("Add wipes to cart");
    display();
}

function EmergenCFunction(){
    cart.push("EmergenC");
    window.confirm("Add EmergenC to cart");
    display();
}

function soapFunction(){
    cart.push("Soap");
    window.confirm("Add soap to cart");
    display();
}