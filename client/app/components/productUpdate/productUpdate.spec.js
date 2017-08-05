import ProductUpdateModule from './productUpdate';
import ProductUpdateController from './productUpdate.controller';
import ProductUpdateComponent from './productUpdate.component';
import ProductUpdateTemplate from './productUpdate.html';

describe('ProductUpdate', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ProductUpdateModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ProductUpdateController();
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
      expect(ProductUpdateTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ProductUpdateComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ProductUpdateTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ProductUpdateController);
    });
  });
});
