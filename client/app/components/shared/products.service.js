import angular from 'angular';

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
    const id = this._getCurrId();
    const newProduct = Object.assign({}, product, { id });
    this.products = [...this.products, newProduct];
    if (this.setProductsInStorage()) {
      // update curr id in localStorage
      this._setCurrId(id);

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

  _getCurrId () {
    const curr = this.localStorageService.get('CURR_ID');
    return angular.isNumber(curr) ? curr + 1 : 0;
  }

  _setCurrId (id) {
    this.localStorageService.set('CURR_ID', id);
  }
}

export default ProductsListService;