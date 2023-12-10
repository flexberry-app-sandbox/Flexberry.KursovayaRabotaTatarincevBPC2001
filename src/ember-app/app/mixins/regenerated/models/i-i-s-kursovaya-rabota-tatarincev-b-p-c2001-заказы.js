import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('string'),
  дата: DS.attr('date'),
  кодЗаказа: DS.attr('number'),
  колПерсон: DS.attr('number'),
  комментарий: DS.attr('string'),
  сумма: DS.attr('decimal'),
  типВручения: DS.attr('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-тип-получения'),
  типОплаты: DS.attr('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-тип-оплаты'),
  клиенты: DS.belongsTo('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-клиенты', { inverse: null, async: false }),
  номера: DS.belongsTo('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-номера', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-сотрудник', { inverse: null, async: false }),
  заказБлюд: DS.hasMany('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказ-блюд', { inverse: 'заказы', async: false }),
  заказНапитков: DS.hasMany('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказ-напитков', { inverse: 'заказы', async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказы.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказы.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кодЗаказа: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказы.validations.кодЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  колПерсон: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказы.validations.колПерсон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  комментарий: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказы.validations.комментарий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказы.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  типВручения: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказы.validations.типВручения.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  типОплаты: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказы.validations.типОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  клиенты: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказы.validations.клиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  номера: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказы.validations.номера.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказы.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заказБлюд: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказы.validations.заказБлюд.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  заказНапитков: {
    descriptionKey: 'models.i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказы.validations.заказНапитков.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказыE', 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказы', {
    кодЗаказа: attr('Код заказа', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    время: attr('Время', { index: 2 }),
    типОплаты: attr('Тип оплаты', { index: 3 }),
    типВручения: attr('Тип вручения', { index: 4 }),
    колПерсон: attr('Количество персон', { index: 5 }),
    комментарий: attr('Комментарий', { index: 6 }),
    сумма: attr('Сумма', { index: 7 }),
    номера: belongsTo('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-номера', 'Номера', {
      номерКомнаты: attr('Номер комнаты', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'номерКомнаты' }),
    клиенты: belongsTo('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-клиенты', 'Клиенты', {
      фамилия: attr('Фамилия клиента', { index: 11, hidden: true })
    }, { index: 10, displayMemberPath: 'фамилия' }),
    сотрудник: belongsTo('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-сотрудник', 'Сотрудник ', {
      фамилия: attr('Фамилия сотрудника', { index: 13, hidden: true })
    }, { index: 12, displayMemberPath: 'фамилия' }),
    заказБлюд: hasMany('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказ-блюд', 'Заказ блюд', {
      комментарий: attr('Комментарий', { index: 0 }),
      блюда: belongsTo('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-блюда', 'Блюда', {
        наименование: attr('Наименование', { index: 2, hidden: true }),
        стоимость: attr('Стоимость блюда', { index: 3 })
      }, { index: 1, displayMemberPath: 'наименование' })
    }),
    заказНапитков: hasMany('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказ-напитков', 'Заказ напитков', {
      комментарий: attr('Комментарий', { index: 0 }),
      напитки: belongsTo('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-напитки', 'Напитки', {
        наименование: attr('Наименование', { index: 2, hidden: true }),
        стоимость: attr('Стоимость напитка', { index: 3 })
      }, { index: 1, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('ЗаказыL', 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказы', {
    кодЗаказа: attr('Код заказа', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    время: attr('Время', { index: 2 }),
    типОплаты: attr('Тип оплаты', { index: 3 }),
    типВручения: attr('Тип вручения', { index: 4 }),
    колПерсон: attr('Количество персон', { index: 5 }),
    комментарий: attr('Комментарий', { index: 6 }),
    сумма: attr('Сумма', { index: 7 }),
    номера: belongsTo('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-номера', 'Номер комнаты', {
      номерКомнаты: attr('Номер комнаты', { index: 8 })
    }, { index: -1, hidden: true }),
    клиенты: belongsTo('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-клиенты', 'Фамилия клиента', {
      фамилия: attr('Фамилия клиента', { index: 9 })
    }, { index: -1, hidden: true }),
    сотрудник: belongsTo('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-сотрудник', 'Фамилия сотрудника', {
      фамилия: attr('Фамилия сотрудника', { index: 10 })
    }, { index: -1, hidden: true })
  });
};
