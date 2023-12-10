import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказы-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказ-блюд+блюда':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'наименование',
            required: true,
            relationName: 'блюда',
            projection: 'БлюдаL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказ-напитков+напитки':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'наименование',
            required: true,
            relationName: 'напитки',
            projection: 'НапиткиL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
