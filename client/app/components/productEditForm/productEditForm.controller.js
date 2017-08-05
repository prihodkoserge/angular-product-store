class ProductEditFormController {
  constructor() {
    this.name = 'productEditForm';
  }

  save () {
    this.onSave({
      $event: {
        product: this.product,
      }
    });
  }
}

export default ProductEditFormController;
