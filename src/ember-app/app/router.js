import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-new-class3-l');
  this.route('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-new-class3-e',
  { path: 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-new-class3-e/:id' });
  this.route('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-new-class3-e.new',
  { path: 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-new-class3-e/new' });
  this.route('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-блюда-l');
  this.route('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-блюда-e',
  { path: 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-блюда-e/:id' });
  this.route('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-блюда-e.new',
  { path: 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-блюда-e/new' });
  this.route('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-должности-l');
  this.route('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-должности-e',
  { path: 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-должности-e/:id' });
  this.route('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-должности-e.new',
  { path: 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-должности-e/new' });
  this.route('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказы-l');
  this.route('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказы-e',
  { path: 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказы-e/:id' });
  this.route('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказы-e.new',
  { path: 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-заказы-e/new' });
  this.route('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-клиенты-l');
  this.route('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-клиенты-e',
  { path: 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-клиенты-e/:id' });
  this.route('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-клиенты-e.new',
  { path: 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-клиенты-e/new' });
  this.route('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-напитки-l');
  this.route('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-напитки-e',
  { path: 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-напитки-e/:id' });
  this.route('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-напитки-e.new',
  { path: 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-напитки-e/new' });
  this.route('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-номера-l');
  this.route('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-номера-e',
  { path: 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-номера-e/:id' });
  this.route('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-номера-e.new',
  { path: 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-номера-e/new' });
  this.route('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-продукты-l');
  this.route('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-продукты-e',
  { path: 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-продукты-e/:id' });
  this.route('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-продукты-e.new',
  { path: 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-продукты-e/new' });
  this.route('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-сотрудник-l');
  this.route('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-сотрудник-e',
  { path: 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-сотрудник-e/:id' });
  this.route('i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-сотрудник-e.new',
  { path: 'i-i-s-kursovaya-rabota-tatarincev-b-p-c2001-сотрудник-e/new' });
});

export default Router;
