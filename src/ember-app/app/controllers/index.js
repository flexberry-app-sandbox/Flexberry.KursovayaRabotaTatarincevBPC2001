import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.сотрудники.caption'),
          title: i18n.t('forms.application.sitemap.сотрудники.title'),
          children: [{
            link: 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.сотрудники.i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудники.i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-сотрудник-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-должности-l',
            caption: i18n.t('forms.application.sitemap.сотрудники.i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудники.i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-должности-l.title'),
            icon: 'address card',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.наши-клиенты.caption'),
          title: i18n.t('forms.application.sitemap.наши-клиенты.title'),
          children: [{
            link: 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-клиенты-l',
            caption: i18n.t('forms.application.sitemap.наши-клиенты.i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.наши-клиенты.i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-клиенты-l.title'),
            icon: 'edit',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.меню-ресторана.caption'),
          title: i18n.t('forms.application.sitemap.меню-ресторана.title'),
          children: [{
            link: 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-блюда-l',
            caption: i18n.t('forms.application.sitemap.меню-ресторана.i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-блюда-l.caption'),
            title: i18n.t('forms.application.sitemap.меню-ресторана.i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-блюда-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-напитки-l',
            caption: i18n.t('forms.application.sitemap.меню-ресторана.i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-напитки-l.caption'),
            title: i18n.t('forms.application.sitemap.меню-ресторана.i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-напитки-l.title'),
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.заказы.caption'),
          title: i18n.t('forms.application.sitemap.заказы.title'),
          children: [{
            link: 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказы-l',
            caption: i18n.t('forms.application.sitemap.заказы.i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказы-l.caption'),
            title: i18n.t('forms.application.sitemap.заказы.i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказы-l.title'),
            icon: 'folder open',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.номера.caption'),
          title: i18n.t('forms.application.sitemap.номера.title'),
          children: [{
            link: 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-номера-l',
            caption: i18n.t('forms.application.sitemap.номера.i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-номера-l.caption'),
            title: i18n.t('forms.application.sitemap.номера.i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-номера-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочник-продукты.caption'),
          title: i18n.t('forms.application.sitemap.справочник-продукты.title'),
          children: [{
            link: 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-продукты-l',
            caption: i18n.t('forms.application.sitemap.справочник-продукты.i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-продукты-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-продукты.i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-продукты-l.title'),
            icon: 'folder',
            children: null
          }]
        }
      ]
    };
  }),
})