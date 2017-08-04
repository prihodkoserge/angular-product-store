import template from './productsList.html';
import controller from './productsList.controller';
import './productsList.scss';

let productsListComponent = {
  bindings: {
    products: '<'
  },
  template,
  controller
};

export default productsListComponent;
