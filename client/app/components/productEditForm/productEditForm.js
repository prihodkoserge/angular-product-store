import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMessages from 'angular-messages';
import productEditFormComponent from './productEditForm.component';

let productEditFormModule = angular.module('productEditForm', [
  uiRouter,
  ngMessages
])

.component('productEditForm', productEditFormComponent)

.name;

export default productEditFormModule;
