class ProductDetailsController {
  constructor(ProductsService, $state, $window) {
    'ngInject';
    this.$state = $state;
    this.$window = $window;
    this.productsService = ProductsService;

    this.name = 'productDetails';
  }

  deleteProduct () {
    const confirmMsg = "Delete " + this.product.title + " from product store?";
    const confirmation = this.$window.confirm(confirmMsg);

    if (confirmation) {
      this.productsService.removeProduct(this.product.id);
      this.$state.go('products');
    }
  }
}

export default ProductDetailsController;
