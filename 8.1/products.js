const products = [
    { number: 1, price: 100, name: 'Orange juice' },
    { number: 2, price: 200, name: 'Soda' },
    { number: 3, price: 150, name: 'Chocolate snack' },
    { number: 4, price: 250, name: 'Cookies' },
    { number: 5, price: 180, name: 'Gummy bears' },
    { number: 6, price: 500, name: 'Chocolates' },
    { number: 7, price: 120, name: 'Crackers' },
    { number: 8, price: 220, name: 'Potato chips' },
    { number: 9, price: 80, name: 'Small snack' },
    ];
    
    const dugar = (sum, num) => {
        const bout = products[num-1];  
        var productPrice = bout.price;
        var hariult = sum - productPrice;
        console.log("product:", bout.name, ",", "change:", hariult);
    };
    dugar(500,2);
