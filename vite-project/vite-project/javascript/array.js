let qwerty = [
    {
        name: "pomeranian",
        type: "poster",
        price: 20,
    },
    {
        name: "maltese",
        type: "poster",
        price: 20,
    },
    {
        name: "papillon",
        type: "poster",
        price: 20,
    },
    {
        name: "siberian husky",
        type: "poster",
        price: 20,
    },
    {
        name: "poodle",
        type: "poster",
        price: 20,
    },
];

let discount = qwerty.map((sale) => ({
    name: sale.name,
    type: sale.type,
    price: parseFloat((sale.price / 1.1).toFixed(2)),
}));

export { qwerty, discount };
