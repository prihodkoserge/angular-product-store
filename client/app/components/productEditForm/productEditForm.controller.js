class ProductEditFormController {
  constructor() {
    this.name = 'productEditForm';
  }

  save (form) {
    if (form.$valid) {
      this.onSave({
        $event: {
          product: this.product,
        }
      });
    }
  }
}

export default ProductEditFormController;
