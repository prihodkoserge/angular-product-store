class ProductsListController {
  constructor($state) {
    'ngInject';
    this.$state = $state;
    this.name = 'productsList';
  }

  selectProduct (event) {
    this.$state.go('product', {
      id: event.productId
    });
  }
}

export default ProductsListController;