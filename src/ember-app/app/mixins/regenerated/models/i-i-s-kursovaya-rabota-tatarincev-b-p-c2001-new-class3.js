import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({});

export let ValidationRules = {};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('NewClass3E', 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-new-class3', {
    
  });

  modelClass.defineProjection('NewClass3L', 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-new-class3', {
    
  });
};
