import angular from 'angular';
import uiRouter from 'angular-ui-router';
import productsListComponent from './productsList.component';

let productsListModule = angular.module('productsList', [
  uiRouter
])
.component('productsList', productsListComponent)

.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('products', {
      url: '/',
      component: 'productsList',
      resolve: {
        products: ProductsService => ProductsService.getProducts()
      }
    });
})

.name;

export default productsListModule;
