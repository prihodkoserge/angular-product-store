import angular from 'angular';
import productsService from './products.service';

let sharedModule = angular.module('about', [])

  .service('ProductsService', productsService)

  .name;

export default sharedModule;
