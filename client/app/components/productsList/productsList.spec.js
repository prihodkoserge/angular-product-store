import ProductsListModule from './productsList';
import ProductsListController from './productsList.controller';
import ProductsListComponent from './productsList.component';
import ProductsListTemplate from './productsList.html';

describe('ProductsList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ProductsListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ProductsListController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(ProductsListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ProductsListComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ProductsListTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ProductsListController);
    });
  });
});
