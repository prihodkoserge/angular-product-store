import angular from 'angular';
import uiRouter from 'angular-ui-router';
import productUpdateComponent from './productUpdate.component';

let productUpdateModule = angular.module('productUpdate', [
  uiRouter
])

.component('productUpdate', productUpdateComponent)

.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('productUpdate', {
      url: '/products/:id/update',
      component: 'productUpdate',
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

export default productUpdateModule;
