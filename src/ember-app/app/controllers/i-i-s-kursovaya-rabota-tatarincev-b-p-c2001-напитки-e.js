import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-напитки-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-состав-напитков+продукты':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'наименование',
            required: true,
            relationName: 'продукты',
            projection: 'ПродуктыL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
