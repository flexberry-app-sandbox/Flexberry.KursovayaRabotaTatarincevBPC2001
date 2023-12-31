import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  комментарий: DS.attr('string'),
  блюда: DS.belongsTo('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-блюда', { inverse: null, async: false }),
  заказы: DS.belongsTo('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказы', { inverse: 'заказБлюд', async: false })
});

export let ValidationRules = {
  комментарий: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказ-блюд.validations.комментарий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  блюда: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказ-блюд.validations.блюда.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заказы: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказ-блюд.validations.заказы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказБлюдE', 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказ-блюд', {
    комментарий: attr('Комментарий', { index: 0 }),
    блюда: belongsTo('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-блюда', 'Блюда', {
      наименование: attr('Наименование', { index: 2, hidden: true }),
      стоимость: attr('Стоимость блюда', { index: 3 })
    }, { index: 1, displayMemberPath: 'наименование' })
  });
};
