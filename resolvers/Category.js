exports.Category = {
  products: ({ id: categoryId }, { filter }, { db }) => {
    const catergoryProducts = db.products.filter(
      (product) => product.categoryId === categoryId
    );
    const filteredCatergoryProducts = catergoryProducts;

    if (filter && filter.onSale) {
      return filteredCatergoryProducts.filter((product) => product.onSale);
    }

    return filteredCatergoryProducts;
  },
};
