class ProductNewController {
  constructor(ProductsService, $state) {
    'ngInject';

    this.productsService = ProductsService;
    this.$state = $state;

    this.name = 'productNew';
    this.error = false;
  }

  $onInit () {
    this.product = {
      title: '',
      description: '',
      price: null,
    };
  }

  create ($event) {
    let result = this.productsService
      .createProduct($event.product);

    if (result) {
      this.$state.go('productDetails', {
        id: result.id,
      });
    } else {
      this.error = true;
    }
  }
}

export default ProductNewController;
