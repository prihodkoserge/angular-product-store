class ProductsListService {
  constructor(localStorageService) {
    'ngInject';
    this.localStorageService = localStorageService;

    if (!this.localStorageService.isSupported) {
      console.warn('Local storage is not supported');
    }

    this.products = this.fetchProducts() || [];
  }

  fetchProducts () {
    return this.localStorageService
      .get('items');
  }

  createProduct (product) {
    const id = this.products.length + 1;
    const newProduct = Object.assign({}, product, { id });
    this.products.push(newProduct);

    this.localStorageService.set('items', this.products);
  }

  getProducts () {
    return this.products;
  }
}

export default ProductsListService;