import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import КлассНомераEnum from '../enums/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-класс-номера';

export default FlexberryEnum.extend({
  enum: КлассНомераEnum,
  sourceType: 'IIS.Kursovaya_rabota_Tatarincev_BPC2001.КлассНомера'
});
