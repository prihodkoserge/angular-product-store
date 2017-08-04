import angular from 'angular';
import uiRouter from 'angular-ui-router';
import productDetailsComponent from './productDetails.component';

let productDetailsModule = angular.module('productDetails', [
  uiRouter
])

.component('productDetails', productDetailsComponent)

.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('productDetails', {
      url: '/products/:id',
      component: 'productDetails',
      resolve: {
        product: ($transition$, ProductsService) => {
          'ngInject';
          const key = $transition$.params().id;
          return ProductsService.getProductByID(key);
        }
      }
    });
})

.name;

export default productDetailsModule;
