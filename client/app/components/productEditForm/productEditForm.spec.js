import ProductEditFormModule from './productEditForm';
import ProductEditFormController from './productEditForm.controller';
import ProductEditFormComponent from './productEditForm.component';
import ProductEditFormTemplate from './productEditForm.html';

describe('ProductEditForm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ProductEditFormModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ProductEditFormController();
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
      expect(ProductEditFormTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ProductEditFormComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ProductEditFormTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ProductEditFormController);
    });
  });
});
