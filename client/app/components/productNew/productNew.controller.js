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

  create () {
    this.productsService
      .createProduct(this.product);
  }
}

export default ProductNewController;
