interface Mountain {
  name: string;
  height: number;
}

let mountains: Mountain[] = [
  {
    name: "Kilimanjaro",
    height: 19341,
  },
  {
    name: "Everest",
    height: 29029,
  },
  {
    name: "Denali",
    height: 20310,
  },
];

const findNameOfTallestMountain = (arrayOfMountains: Mountain[]): string => {
  let tallestMountain = arrayOfMountains[0];
  arrayOfMountains.forEach((mountain) => {
    if (tallestMountain.height < mountain.height) {
      tallestMountain = mountain;
    }
  });
  return tallestMountain.name;
};

// console.log(findNameOfTallestMountain(mountains));

interface Product {
  name: string;
  price: number;
}

let products: Product[] = [
  {
    name: "toothbrush",
    price: 2,
  },
  {
    name: "toothpaste",
    price: 3,
  },
  {
    name: "floss",
    price: 1,
  },
];

const calcAverageProductPrice = (arrayOfProducts: Product[]): number => {
  let averagePrice = 0;
  arrayOfProducts.forEach((product) => {
    averagePrice += product.price / arrayOfProducts.length;
  });
  return Math.round(averagePrice);
};

console.log(calcAverageProductPrice(products));

interface InventoryItem {
  product: Product;
  quantity: number;
}

let inventory: InventoryItem[] = [
  {
    product: { name: "motor", price: 10.0 },
    quantity: 10,
  },
  {
    product: { name: "sensor", price: 12.5 },
    quantity: 4,
  },
  {
    product: { name: "LED", price: 1.0 },
    quantity: 20,
  },
];

const calcInventoryValue = (
  arrayOfInventoryValues: InventoryItem[]
): number => {
  let counter = 0;
  arrayOfInventoryValues.forEach((item) => {
    let itemValues = item.product.price * item.quantity;
    counter += itemValues;
  });
  return counter;
};

console.log(calcInventoryValue(inventory));
