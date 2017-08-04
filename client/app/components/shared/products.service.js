class ProductsListService {
  constructor() {
    this.products = [
      {
        id: 0,
        title: 'Book1',
        price: 120.35,
        description: 'Great book!'
      },
      {
        id: 1,
        title: 'Book2',
        price: 93.5,
        description: 'Norm'
      },
      {
        id: 2,
        title: 'Book3',
        price: 345.1,
        description: 'Expensive ('
      },
      {
        id: 3,
        title: 'Book4',
        price: 40.0,
        description: 'Cheap'
      },
      {
        id: 4,
        title: 'Book5',
        price: 149.99,
        description: 'Nope'
      }
    ];
  }

  createProduct (product) {
    const id = this.products.length + 1;
    const newProduct = Object.assign({}, product, { id });
    this.products.push(newProduct);
  }

  getProducts () {
    return this.products;
  }
}

export default ProductsListService;