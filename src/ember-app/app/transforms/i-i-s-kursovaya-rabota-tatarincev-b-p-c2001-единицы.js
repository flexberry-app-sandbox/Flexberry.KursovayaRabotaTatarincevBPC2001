import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ЕдиницыEnum from '../enums/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-единицы';

export default FlexberryEnum.extend({
  enum: ЕдиницыEnum,
  sourceType: 'IIS.Kursovaya_rabota_Tatarincev_BPC2001.Единицы'
});
