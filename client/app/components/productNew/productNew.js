import angular from 'angular';
import uiRouter from 'angular-ui-router';
import productNewComponent from './productNew.component';

let productNewModule = angular.module('productNew', [
  uiRouter
])

.component('productNew', productNewComponent)

.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('newProduct', {
      url: '/new',
      component: 'productNew'
    });
})

.name;

export default productNewModule;
