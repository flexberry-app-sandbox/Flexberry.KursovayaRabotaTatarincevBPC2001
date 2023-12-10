import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипОплатыEnum from '../enums/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-тип-оплаты';

export default FlexberryEnum.extend({
  enum: ТипОплатыEnum,
  sourceType: 'IIS.Kursovaya_rabota_Tatarincev_BPC2001.ТипОплаты'
});
