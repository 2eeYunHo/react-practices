import fs from 'fs';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
}
const updateOrderProducts = state.order.products;
updateOrderProducts.push ({
        "no": "p002-001",
        "name": "팬츠 스트라이프",
        "price": 2000,
        "amount": 1
});
console.log(state.order.products, updateOrderProducts, state.order.products ===  updateOrderProducts)