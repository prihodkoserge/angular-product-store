import angular from 'angular';
import uiRouter from 'angular-ui-router';
import productComponent from './product.component';

let productModule = angular.module('product', [
  uiRouter
])

.component('product', productComponent)

.name;

export default productModule;
