let smartPhones = [{
        name: 'iphone',
        price: 649
    },
    {
        name: 'Galaxy S6',
        price: 576
    },
    {
        name: 'Galaxy S8',
        price: 1212
    },
    {
        name: 'Galaxy S9',
        price: 1522
    },
    {
        name: 'Galaxy Note 5',
        price: 489
    }
]


let module = (function () {
    let newPhone = smartPhones;
    // let taxed = 0;
    return {
        tax: (phone) => {
            taxed = newPhone[phone].price * 1.175
        },
        isTax: () => taxed,
        x: () => newPhone.map((x) => (x.price * 1.175).toFixed(2))
    }
}())
