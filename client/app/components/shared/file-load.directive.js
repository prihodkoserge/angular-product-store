export default () => {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: (scope, el, attrs, ngModel) => {
      el.on("change", changeEvent => {
        const reader = new FileReader();
        reader.onload = function (loadEvent) {
            const newValue = {
              lastModified: changeEvent.target.files[0].lastModified,
              lastModifiedDate: changeEvent.target.files[0].lastModifiedDate,
              name: changeEvent.target.files[0].name,
              size: changeEvent.target.files[0].size,
              type: changeEvent.target.files[0].type,
              data: loadEvent.target.result
            };
            ngModel.$setViewValue(newValue);
        };
        reader.readAsDataURL(changeEvent.target.files[0]);
      });
    },
  };
};