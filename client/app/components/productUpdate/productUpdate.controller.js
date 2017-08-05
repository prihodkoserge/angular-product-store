class ProductUpdateController {
  constructor(ProductsService, $state) {
    'ngInject';
    this.productsService = ProductsService;
    this.$state = $state;

    this.name = 'productUpdate';
  }

  update ($event) {
    this.productsService
      .updateProduct($event.product);
    this.$state.go('productDetails', {
      id: $event.product.id,
    });
  }
}

export default ProductUpdateController;
