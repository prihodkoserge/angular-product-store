import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Product from './product/product';
import ProductsList from './productsList/productsList';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Product,
  ProductsList
])

.name;

export default componentModule;
