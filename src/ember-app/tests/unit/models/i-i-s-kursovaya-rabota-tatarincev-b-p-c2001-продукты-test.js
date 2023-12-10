import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-продукты', 'Unit | Model | i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-продукты', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-new-class3',
    'model:i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-блюда',
    'model:i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-должности',
    'model:i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказ-блюд',
    'model:i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказ-напитков',
    'model:i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказы',
    'model:i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-клиенты',
    'model:i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-напитки',
    'model:i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-номера',
    'model:i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-продукты',
    'model:i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-состав-блюда',
    'model:i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-состав-напитков',
    'model:i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
