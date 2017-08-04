class ProductController {
  constructor() {
    this.name = 'product';
  }

  selectProduct () {
    this.onSelect({
      $event: {
        productId: this.product.id
      }
    });
  }
}

export default ProductController;
