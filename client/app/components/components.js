import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Shared from './shared/shared';
import Product from './product/product';
import ProductDetails from './productDetails/productDetails';
import ProductsList from './productsList/productsList';
import ProductNew from './productNew/productNew';

let componentModule = angular.module('app.components', [
  Shared,
  Home,
  About,
  Product,
  ProductDetails,
  ProductsList,
  ProductNew
])

.name;

export default componentModule;
