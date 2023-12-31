import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  единицы: DS.attr('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-единицы'),
  количество: DS.attr('number'),
  продукты: DS.belongsTo('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-продукты', { inverse: null, async: false }),
  напитки: DS.belongsTo('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-напитки', { inverse: 'составНапитков', async: false })
});

export let ValidationRules = {
  единицы: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-состав-напитков.validations.единицы.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  количество: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-состав-напитков.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  продукты: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-состав-напитков.validations.продукты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  напитки: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-состав-напитков.validations.напитки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СоставНапитковE', 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-состав-напитков', {
    количество: attr('Количество', { index: 0 }),
    единицы: attr('Единицы', { index: 1 }),
    продукты: belongsTo('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-продукты', 'Продукты', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' })
  });
};
