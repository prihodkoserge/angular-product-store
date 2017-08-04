import template from './product.html';
import controller from './product.controller';
import './product.scss';

let productComponent = {
  bindings: {
    product: '<',
    onSelect: '&'
  },
  template,
  controller
};

export default productComponent;
