const bestAirMaxQuery = `*[_type == "product"][0..4]{
  _id,
  productName,
    category,
    price,
  image,
}`;

const gearUp_1_Query = `*[_type == "product"][5..8]{
  _id,
  productName,
    category,
    price,
  image,
}`;

const gearUp_2_Query = `*[_type == "product"][9..12]{
  _id,
  productName,
    category,
    price,
  image,
}`;

const allProductsQuery = `*[_type == "product"]{
  _id,
  image,
  productName,
  price,
  colors,
  description,
  category,
  status
}`;



export {bestAirMaxQuery, gearUp_1_Query, gearUp_2_Query, allProductsQuery}