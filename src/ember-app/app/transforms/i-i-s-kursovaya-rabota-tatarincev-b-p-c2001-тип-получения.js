import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипПолученияEnum from '../enums/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-тип-получения';

export default FlexberryEnum.extend({
  enum: ТипПолученияEnum,
  sourceType: 'IIS.Kursovaya_rabota_Tatarincev_BPC2001.ТипПолучения'
});
