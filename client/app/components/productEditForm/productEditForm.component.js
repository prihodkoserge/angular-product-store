import template from './productEditForm.html';
import controller from './productEditForm.controller';
import './productEditForm.scss';

let productEditFormComponent = {
  bindings: {
    onSave: '&',
    product: '<',
  },
  template,
  controller
};

export default productEditFormComponent;
