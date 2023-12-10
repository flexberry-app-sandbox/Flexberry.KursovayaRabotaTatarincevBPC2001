import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЗаказБлюдMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказ-блюд';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЗаказБлюдMixin, Validations, {
});

defineProjections(Model);

export default Model;
