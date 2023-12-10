import {
  defineNamespace,
  defineProjections,
  Model as БлюдаMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-блюда';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(БлюдаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
