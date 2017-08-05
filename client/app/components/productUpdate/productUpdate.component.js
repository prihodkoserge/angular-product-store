import template from './productUpdate.html';
import controller from './productUpdate.controller';
import './productUpdate.scss';

let productUpdateComponent = {
  bindings: {
    product: '<',
  },
  template,
  controller
};

export default productUpdateComponent;
