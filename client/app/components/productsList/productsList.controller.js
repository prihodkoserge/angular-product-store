class ProductsListController {
  constructor($state, ProductsService) {
    'ngInject';
    this.$state = $state;
    this.productsService = ProductsService;

    this.name = 'productsList';
  }

  selectProduct (event) {
    this.$state.go('productDetails', {
      id: event.productId
    });
  }
}

export default ProductsListController;
