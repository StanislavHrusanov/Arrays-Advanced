function listOfProducts(productsArr) {
    let sortedProducts = productsArr.sort();
    for (let i = 0; i < sortedProducts.length; i++) {
        console.log(`${i + 1}.${productsArr[i]}`);
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);