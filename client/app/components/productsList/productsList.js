import angular from 'angular';
import uiRouter from 'angular-ui-router';
import productsListComponent from './productsList.component';
import productsListService from './productsList.service';

let productsListModule = angular.module('productsList', [
  uiRouter
])
.component('productsList', productsListComponent)
.service('ProductsService', productsListService)
.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('products', {
      url: '/products',
      component: 'productsList',
      resolve: {
        products: ProductsService => ProductsService.getProducts()
      }
    });
})
.name;

export default productsListModule;
