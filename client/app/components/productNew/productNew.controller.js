class ProductNewController {
  constructor(ProductsService) {
    'ngInject';

    this.name = 'productNew';
    this.productsService = ProductsService;
  }

  $onInit () {
    this.product = {
      title: '',
      description: '',
      price: null,
      img: null,
    };
  }

  create ($event) {
    this.productsService
      .createProduct($event.product);
  }
}

export default ProductNewController;
