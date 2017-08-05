import angular from 'angular';

class ProductsListService {
  constructor(localStorageService) {
    'ngInject';
    this.localStorageService = localStorageService;

    if (!this.localStorageService.isSupported) {
      console.warn('Local storage is not supported');
    }
  }

  fetchProductsFromStorage () {
    return this.localStorageService
      .get('items') || [];
  }

  setProductsInStorage (products) {
    return this.localStorageService
      .set('items', products);
  }

  createProduct (productData) {
    const id = this._getNextId();
    const newProduct = Object.assign({}, productData, { id });


    const oldProducts = this.fetchProductsFromStorage();
    const newProducts = [...oldProducts, newProduct];

    if (this.setProductsInStorage(newProducts)) {
      this._setCurrId(id); // update curr id in localStorage
      return newProduct;
    } else {
      return null;
    }
  }

  updateProduct (productData) {
    const oldProducts = this.fetchProductsFromStorage();
    const newProducts = oldProducts.map(product =>
      (product.id == productData.id)
        ? Object.assign({}, product, productData)
        : product
    );
    return this.setProductsInStorage(newProducts);
  }

  removeProduct (id) {
    const oldProducts = this.fetchProductsFromStorage();
    const newProducts = oldProducts.filter(item => item.id != id);
    return this.setProductsInStorage(newProducts);
  }

  getProductByID (id) {
    const products = this.fetchProductsFromStorage();
    const filtered = products.filter(item => item.id == id);
    return filtered.length ? filtered[0] : null;
  }

  _getNextId () {
    const curr = this.localStorageService.get('CURR_ID');
    return angular.isNumber(curr) ? curr + 1 : 0;
  }

  _setCurrId (id) {
    return this.localStorageService.set('CURR_ID', id);
  }
}

export default ProductsListService;