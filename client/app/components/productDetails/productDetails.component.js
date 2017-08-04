import template from './productDetails.html';
import controller from './productDetails.controller';
import './productDetails.scss';

let productDetailsComponent = {
  bindings: {
    product: '<'
  },
  template,
  controller
};

export default productDetailsComponent;
