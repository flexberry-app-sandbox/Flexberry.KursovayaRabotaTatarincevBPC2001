import { Serializer as НомераSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-номера';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(НомераSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
