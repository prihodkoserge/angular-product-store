export default () => {
  // TODO: get valid formats as attr
  const VALID_FORMATS = ['jpg', 'jpeg'];

  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.validextension = (modelValue, viewValue) => {
        if (ctrl.$isEmpty(modelValue)) {
          return true;
        }

        const fileName = modelValue.name;
        if (!fileName)
          return false;

        const extension = fileName.split('.').pop();
        return ~VALID_FORMATS.indexOf(extension);
      };
    },
  };
};