import ProductNewModule from './productNew';
import ProductNewController from './productNew.controller';
import ProductNewComponent from './productNew.component';
import ProductNewTemplate from './productNew.html';

describe('ProductNew', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ProductNewModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ProductNewController();
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
      expect(ProductNewTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ProductNewComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ProductNewTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ProductNewController);
    });
  });
});
