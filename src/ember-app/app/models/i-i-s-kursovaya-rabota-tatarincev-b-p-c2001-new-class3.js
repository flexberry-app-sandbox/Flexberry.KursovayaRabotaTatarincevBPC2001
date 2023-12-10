import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as NewClass3Mixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-new-class3';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(NewClass3Mixin, Validations, {
});

defineProjections(Model);

export default Model;
