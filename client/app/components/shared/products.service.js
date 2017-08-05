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

  setProductsInStorage () {
    return this.localStorageService
      .set('items', this.products);
  }

  createProduct (product) {
    const id = this.products.length + 1;
    const newProduct = Object.assign({}, product, { id });
    this.products = [...this.products, newProduct];
    if (this.setProductsInStorage()) {
      return newProduct;
    } else {
      return null;
    }
  }

  updateProduct (productData) {
    let targetProduct = this.getProductByID(productData.id);
    targetProduct = Object.assign({}, targetProduct, productData);
    return this.setProductsInStorage();
  }

  removeProduct (id) {
    this.products = this.products.filter(item => item.id !== id);
    return this.setProductsInStorage();
  }

  getProducts () {
    return this.products;
  }

  getProductByID (id) {
    let filterById = (item) => {
      return item.id == id;
    };
    const filtered = this.products.filter(filterById);
    return filtered.length ? filtered[0] : null;
  }
}

export default ProductsListService;