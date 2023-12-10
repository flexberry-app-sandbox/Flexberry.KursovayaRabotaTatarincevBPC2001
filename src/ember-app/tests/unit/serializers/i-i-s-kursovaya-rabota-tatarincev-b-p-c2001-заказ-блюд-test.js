import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказ-блюд', 'Unit | Serializer | i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказ-блюд', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказ-блюд',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-единицы',
    'transform:i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-класс-номера',
    'transform:i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-тип-оплаты',
    'transform:i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-тип-получения',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
