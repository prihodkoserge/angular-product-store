import angular from 'angular';
import localStorageModule from 'angular-local-storage';

import productsService from './products.service';
import fileLoadDirective from './file-load.directive';
import fileExtensionsDirective from './file-extensions.directive';

let sharedModule = angular.module('about', [
  localStorageModule
])

.directive('fileExtensions', fileExtensionsDirective)

.directive('fileLoad', fileLoadDirective)

.service('ProductsService', productsService)

.config((localStorageServiceProvider) => {
  'ngInject';

  localStorageServiceProvider
    .setPrefix('productsStore');
})

.name;

export default sharedModule;
