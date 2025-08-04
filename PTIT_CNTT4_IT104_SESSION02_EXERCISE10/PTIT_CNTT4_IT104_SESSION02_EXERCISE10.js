function getOrderSummary(product) {
    let totalBeforeDiscount = 0;
    let totalAfterDiscount = 0;
    const details = [];
    for (const item of product) {
        const { name, price, quantity, discount, bulkDiscounts } = item;
        totalBeforeDiscount += price * quantity;
        let finalDiscount = discount || 0;
        if(bulkDiscounts && quantity >= bulkDiscounts.minQuantity) {
            finalDiscount += bulkDiscounts.extraDiscount;
        }
        const finalPrice = Math.round(price * (1 - finalDiscount));
        const subtotal = finalPrice * quantity;
        totalAfterDiscount += subtotal;

        details.push({
                name,
                finalPrice,
                quantity,
                subtotal,
            });

    }
    return {
        totalBeforeDiscount,
        totalAfterDiscount,
        details
    };    
};
const product = [
    {
        name: "Laptop",
        price: 1000,
        quantity: 2,
        discount: 0.1,
        bulkDiscounts: {
            minQuantity: 3,
            extraDiscount: 0.05
        }
    },
    {
        name: "Mouse",
        price: 50,
        quantity: 5,
        discount: 0.05,
        bulkDiscounts: {
            minQuantity: 5,
            extraDiscount: 0.02
        }
    }
];
console.log(getOrderSummary(product));