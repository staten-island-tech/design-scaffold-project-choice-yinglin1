let qwerty = [
  {
    name: "wonder woman poster",
    type: "poster",
    price: 20,
  },
  {
    name: "captain america poster",
    type: "poster",
    price: 20,
  },
  {
    name: "spider-man poster",
    type: "poster",
    price: 20,
  },
  {
    name: "green lantern poster",
    type: "poster",
    price: 20,
  },
  {
    name: "bat man poster",
    type: "poster",
    price: 20,
  },
  {
    name: "justice league poster",
    type: "poster",
    price: 20,
  },
  {
    name: "MIT banner",
    type: "banner",
    price: 10,
  },
  {
    name: "LIU banner",
    type: ["banner"],
    price: 10,
  },
  {
    name: "Georgetown banner",
    type: "banner",
    price: 10,
  },
  {
    name: "Cornell banner",
    type: "banner",
    price: 10,
  },
  {
    name: "NYU banner",
    type: "banner",
    price: 10,
  },
  {
    name: "Northeastern banner",
    type: "banner",
    price: 10,
  },
  {
    name: "Baruch banner",
    type: "banner",
    price: 10,
  },
  {
    name: "RIT banner",
    type: "banner",
    price: 10,
  },
  {
    name: "dr. doom figurine",
    type: "figurine",
    price: 15,
  },
  {
    name: "green lantern figurine",
    type: "figurine",
    price: 15,
  },
  {
    name: "magneto figurine",
    type: "figurine",
    price: 15,
  },
  {
    name: "goku funko pop figurine",
    type: "figurine",
    price: 15,
  },
];

let discount = qwerty.map((sale) => ({
  name: sale.name,
  type: sale.type,
  price: parseFloat((sale.price / 1.1).toFixed(2)),
}));

export { qwerty, discount };
