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

  setProducts () {
    return this.localStorageService
      .set('items', this.products);
  }

  createProduct (product) {
    const id = this.products.length + 1;
    const newProduct = Object.assign({}, product, { id });
    this.products.push(newProduct);

    this.setProducts();
  }

  removeProduct (id) {
    this.products = this.products.filter(item => item.id !== id);
    this.setProducts();
  }

  getProducts () {
    return this.products;
  }

  getProductByID (id) {
    let filterById = (item) => {
      console.info(item, id, item.id == id);
      return item.id == id;
    };
    const filtered = this.products.filter(filterById);
    return filtered.length ? filtered[0] : null;
  }
}

export default ProductsListService;