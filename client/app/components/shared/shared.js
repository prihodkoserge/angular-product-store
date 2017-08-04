import angular from 'angular';
import localStorageModule from 'angular-local-storage';

import productsService from './products.service';


let sharedModule = angular.module('about', [
  localStorageModule
])
.service('ProductsService', productsService)
.config((localStorageServiceProvider) => {
  'ngInject';

  localStorageServiceProvider
    .setPrefix('productsStore');
})
.name;

export default sharedModule;
