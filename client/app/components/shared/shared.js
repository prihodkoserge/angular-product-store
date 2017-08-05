import angular from 'angular';
import localStorageModule from 'angular-local-storage';

import productsService from './products.service';
import fileLoadDirective from './file-load.directive';

let sharedModule = angular.module('about', [
  localStorageModule
])
.directive('fileLoad', fileLoadDirective)
.service('ProductsService', productsService)
.config((localStorageServiceProvider) => {
  'ngInject';

  localStorageServiceProvider
    .setPrefix('productsStore');
})
.name;

export default sharedModule;
