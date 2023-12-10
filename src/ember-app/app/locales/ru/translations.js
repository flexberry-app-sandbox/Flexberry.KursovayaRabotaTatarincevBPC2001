import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISKursovaya_rabota_Tatarincev_BPC2001NewClass3LForm from './forms/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-new-class3-l';
import IISKursovaya_rabota_Tatarincev_BPC2001БлюдаLForm from './forms/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-блюда-l';
import IISKursovaya_rabota_Tatarincev_BPC2001ДолжностиLForm from './forms/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-должности-l';
import IISKursovaya_rabota_Tatarincev_BPC2001ЗаказыLForm from './forms/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказы-l';
import IISKursovaya_rabota_Tatarincev_BPC2001КлиентыLForm from './forms/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-клиенты-l';
import IISKursovaya_rabota_Tatarincev_BPC2001НапиткиLForm from './forms/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-напитки-l';
import IISKursovaya_rabota_Tatarincev_BPC2001НомераLForm from './forms/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-номера-l';
import IISKursovaya_rabota_Tatarincev_BPC2001ПродуктыLForm from './forms/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-продукты-l';
import IISKursovaya_rabota_Tatarincev_BPC2001СотрудникLForm from './forms/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-сотрудник-l';
import IISKursovaya_rabota_Tatarincev_BPC2001NewClass3EForm from './forms/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-new-class3-e';
import IISKursovaya_rabota_Tatarincev_BPC2001БлюдаEForm from './forms/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-блюда-e';
import IISKursovaya_rabota_Tatarincev_BPC2001ДолжностиEForm from './forms/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-должности-e';
import IISKursovaya_rabota_Tatarincev_BPC2001ЗаказыEForm from './forms/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказы-e';
import IISKursovaya_rabota_Tatarincev_BPC2001КлиентыEForm from './forms/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-клиенты-e';
import IISKursovaya_rabota_Tatarincev_BPC2001НапиткиEForm from './forms/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-напитки-e';
import IISKursovaya_rabota_Tatarincev_BPC2001НомераEForm from './forms/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-номера-e';
import IISKursovaya_rabota_Tatarincev_BPC2001ПродуктыEForm from './forms/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-продукты-e';
import IISKursovaya_rabota_Tatarincev_BPC2001СотрудникEForm from './forms/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-сотрудник-e';
import IISKursovaya_rabota_Tatarincev_BPC2001NewClass3Model from './models/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-new-class3';
import IISKursovaya_rabota_Tatarincev_BPC2001БлюдаModel from './models/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-блюда';
import IISKursovaya_rabota_Tatarincev_BPC2001ДолжностиModel from './models/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-должности';
import IISKursovaya_rabota_Tatarincev_BPC2001ЗаказБлюдModel from './models/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказ-блюд';
import IISKursovaya_rabota_Tatarincev_BPC2001ЗаказНапитковModel from './models/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказ-напитков';
import IISKursovaya_rabota_Tatarincev_BPC2001ЗаказыModel from './models/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказы';
import IISKursovaya_rabota_Tatarincev_BPC2001КлиентыModel from './models/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-клиенты';
import IISKursovaya_rabota_Tatarincev_BPC2001НапиткиModel from './models/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-напитки';
import IISKursovaya_rabota_Tatarincev_BPC2001НомераModel from './models/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-номера';
import IISKursovaya_rabota_Tatarincev_BPC2001ПродуктыModel from './models/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-продукты';
import IISKursovaya_rabota_Tatarincev_BPC2001СоставБлюдаModel from './models/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-состав-блюда';
import IISKursovaya_rabota_Tatarincev_BPC2001СоставНапитковModel from './models/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-состав-напитков';
import IISKursovaya_rabota_Tatarincev_BPC2001СотрудникModel from './models/i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-new-class3': IISKursovaya_rabota_Tatarincev_BPC2001NewClass3Model,
    'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-блюда': IISKursovaya_rabota_Tatarincev_BPC2001БлюдаModel,
    'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-должности': IISKursovaya_rabota_Tatarincev_BPC2001ДолжностиModel,
    'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказ-блюд': IISKursovaya_rabota_Tatarincev_BPC2001ЗаказБлюдModel,
    'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказ-напитков': IISKursovaya_rabota_Tatarincev_BPC2001ЗаказНапитковModel,
    'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказы': IISKursovaya_rabota_Tatarincev_BPC2001ЗаказыModel,
    'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-клиенты': IISKursovaya_rabota_Tatarincev_BPC2001КлиентыModel,
    'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-напитки': IISKursovaya_rabota_Tatarincev_BPC2001НапиткиModel,
    'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-номера': IISKursovaya_rabota_Tatarincev_BPC2001НомераModel,
    'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-продукты': IISKursovaya_rabota_Tatarincev_BPC2001ПродуктыModel,
    'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-состав-блюда': IISKursovaya_rabota_Tatarincev_BPC2001СоставБлюдаModel,
    'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-состав-напитков': IISKursovaya_rabota_Tatarincev_BPC2001СоставНапитковModel,
    'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-сотрудник': IISKursovaya_rabota_Tatarincev_BPC2001СотрудникModel
  },

  'application-name': 'Kursovaya_rabota_ tatarincev_ b p c2001',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kursovaya_rabota_ tatarincev_ b p c2001',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya_rabota_ tatarincev_ b p c2001',
          title: 'Kursovaya_rabota_ tatarincev_ b p c2001'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        сотрудники: {
          caption: 'Сотрудники',
          title: 'Сотрудники',
          'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-сотрудник-l': {
            caption: 'Сотрудник',
            title: 'Сотрудник'
          },
          'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-должности-l': {
            caption: 'Должности',
            title: 'Должности'
          }
        },
        'наши-клиенты': {
          caption: 'Наши клиенты',
          title: 'Наши клиенты',
          'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-клиенты-l': {
            caption: 'Клиенты',
            title: 'Клиенты'
          }
        },
        'меню-ресторана': {
          caption: 'Меню ресторана',
          title: 'Меню ресторана',
          'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-блюда-l': {
            caption: 'Блюда',
            title: 'Блюда'
          },
          'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-напитки-l': {
            caption: 'Напитки',
            title: 'Напитки'
          }
        },
        заказы: {
          caption: 'Заказы',
          title: 'Заказы',
          'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказы-l': {
            caption: 'Заказы',
            title: 'Заказы'
          }
        },
        номера: {
          caption: 'Номера',
          title: 'Номера',
          'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-номера-l': {
            caption: 'Номера',
            title: 'Номера'
          }
        },
        'справочник-продукты': {
          caption: 'Справочник продукты',
          title: 'Справочник продукты',
          'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-продукты-l': {
            caption: 'Продукты',
            title: 'Продукты'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-new-class3-l': IISKursovaya_rabota_Tatarincev_BPC2001NewClass3LForm,
    'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-блюда-l': IISKursovaya_rabota_Tatarincev_BPC2001БлюдаLForm,
    'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-должности-l': IISKursovaya_rabota_Tatarincev_BPC2001ДолжностиLForm,
    'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказы-l': IISKursovaya_rabota_Tatarincev_BPC2001ЗаказыLForm,
    'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-клиенты-l': IISKursovaya_rabota_Tatarincev_BPC2001КлиентыLForm,
    'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-напитки-l': IISKursovaya_rabota_Tatarincev_BPC2001НапиткиLForm,
    'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-номера-l': IISKursovaya_rabota_Tatarincev_BPC2001НомераLForm,
    'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-продукты-l': IISKursovaya_rabota_Tatarincev_BPC2001ПродуктыLForm,
    'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-сотрудник-l': IISKursovaya_rabota_Tatarincev_BPC2001СотрудникLForm,
    'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-new-class3-e': IISKursovaya_rabota_Tatarincev_BPC2001NewClass3EForm,
    'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-блюда-e': IISKursovaya_rabota_Tatarincev_BPC2001БлюдаEForm,
    'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-должности-e': IISKursovaya_rabota_Tatarincev_BPC2001ДолжностиEForm,
    'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказы-e': IISKursovaya_rabota_Tatarincev_BPC2001ЗаказыEForm,
    'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-клиенты-e': IISKursovaya_rabota_Tatarincev_BPC2001КлиентыEForm,
    'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-напитки-e': IISKursovaya_rabota_Tatarincev_BPC2001НапиткиEForm,
    'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-номера-e': IISKursovaya_rabota_Tatarincev_BPC2001НомераEForm,
    'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-продукты-e': IISKursovaya_rabota_Tatarincev_BPC2001ПродуктыEForm,
    'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-сотрудник-e': IISKursovaya_rabota_Tatarincev_BPC2001СотрудникEForm
  },

});

export default translations;
