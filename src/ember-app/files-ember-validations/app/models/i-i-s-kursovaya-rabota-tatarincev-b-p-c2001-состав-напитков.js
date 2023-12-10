import {
  defineNamespace,
  defineProjections,
  Model as СоставНапитковMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-состав-напитков';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СоставНапитковMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
