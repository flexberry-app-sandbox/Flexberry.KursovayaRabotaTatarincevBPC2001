import { Serializer as ЗаказыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказы';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗаказыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
