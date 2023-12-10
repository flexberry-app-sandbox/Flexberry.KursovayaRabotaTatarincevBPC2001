import {
  defineNamespace,
  defineProjections,
  Model as ДолжностиMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-должности';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДолжностиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
