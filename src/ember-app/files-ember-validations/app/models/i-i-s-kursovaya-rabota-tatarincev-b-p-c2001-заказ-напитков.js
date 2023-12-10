import {
  defineNamespace,
  defineProjections,
  Model as ЗаказНапитковMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказ-напитков';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗаказНапитковMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
