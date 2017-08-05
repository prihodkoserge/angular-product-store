import angular from 'angular';
import uiRouter from 'angular-ui-router';
import productEditFormComponent from './productEditForm.component';

let productEditFormModule = angular.module('productEditForm', [
  uiRouter
])

.component('productEditForm', productEditFormComponent)

.name;

export default productEditFormModule;
