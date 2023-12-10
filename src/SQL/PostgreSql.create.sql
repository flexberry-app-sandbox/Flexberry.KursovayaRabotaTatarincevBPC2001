﻿




CREATE TABLE Напитки (
 primaryKey UUID NOT NULL,
 КодНапитка INT NULL,
 Наименование VARCHAR(255) NULL,
 Стоимость DOUBLE PRECISION NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Заказы (
 primaryKey UUID NOT NULL,
 Время VARCHAR(255) NULL,
 Дата TIMESTAMP(3) NULL,
 КодЗаказа INT NULL,
 КолПерсон INT NULL,
 Комментарий VARCHAR(255) NULL,
 Сумма DOUBLE PRECISION NULL,
 ТипВручения VARCHAR(16) NULL,
 ТипОплаты VARCHAR(17) NULL,
 Клиенты UUID NOT NULL,
 Номера UUID NOT NULL,
 Сотрудник UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE NewClass3 (
 primaryKey UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Должности (
 primaryKey UUID NOT NULL,
 КодДолжности INT NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Сотрудник (
 primaryKey UUID NOT NULL,
 ДатаРождения TIMESTAMP(3) NULL,
 Имя VARCHAR(255) NULL,
 КодСотрудника INT NULL,
 НомерТелефона INT NULL,
 Отчество VARCHAR(255) NULL,
 Фамилия VARCHAR(255) NULL,
 Должности UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Блюда (
 primaryKey UUID NOT NULL,
 КодБлюда INT NULL,
 Наименование VARCHAR(255) NULL,
 Стоимость DOUBLE PRECISION NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СоставБлюда (
 primaryKey UUID NOT NULL,
 Единицы VARCHAR(2) NULL,
 Количество INT NULL,
 Продукты UUID NOT NULL,
 Блюда UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ЗаказБлюд (
 primaryKey UUID NOT NULL,
 Комментарий VARCHAR(255) NULL,
 Блюда UUID NOT NULL,
 Заказы UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ЗаказНапитков (
 primaryKey UUID NOT NULL,
 Комментарий VARCHAR(255) NULL,
 Напитки UUID NOT NULL,
 Заказы UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Номера (
 primaryKey UUID NOT NULL,
 НомерКомнаты INT NULL,
 ТипНомера VARCHAR(13) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Клиенты (
 primaryKey UUID NOT NULL,
 ДатаРождения TIMESTAMP(3) NULL,
 Имя VARCHAR(255) NULL,
 КодКлиента INT NULL,
 НомерТелефона INT NULL,
 Отчество VARCHAR(255) NULL,
 Фамилия VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Продукты (
 primaryKey UUID NOT NULL,
 КодПродукта INT NULL,
 Наименование VARCHAR(255) NULL,
 Производитель VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СоставНапитков (
 primaryKey UUID NOT NULL,
 Единицы VARCHAR(2) NULL,
 Количество INT NULL,
 Продукты UUID NOT NULL,
 Напитки UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE Заказы ADD CONSTRAINT FKa0206024e6bb894e806ddd2d2e4443819c2687f9 FOREIGN KEY (Клиенты) REFERENCES Клиенты; 
CREATE INDEX Indexa0206024e6bb894e806ddd2d2e4443819c2687f9 on Заказы (Клиенты); 

 ALTER TABLE Заказы ADD CONSTRAINT FK2184614337eed47f4dcafc999cbba0b6ac1e514a FOREIGN KEY (Номера) REFERENCES Номера; 
CREATE INDEX Index2184614337eed47f4dcafc999cbba0b6ac1e514a on Заказы (Номера); 

 ALTER TABLE Заказы ADD CONSTRAINT FKb0c797a8458814ba89ac3019da75926a256c689f FOREIGN KEY (Сотрудник) REFERENCES Сотрудник; 
CREATE INDEX Indexb0c797a8458814ba89ac3019da75926a256c689f on Заказы (Сотрудник); 

 ALTER TABLE Сотрудник ADD CONSTRAINT FKcddb0989bfc59f7f8b75feb65c08d7cc7f9c96b0 FOREIGN KEY (Должности) REFERENCES Должности; 
CREATE INDEX Indexcddb0989bfc59f7f8b75feb65c08d7cc7f9c96b0 on Сотрудник (Должности); 

 ALTER TABLE СоставБлюда ADD CONSTRAINT FKc68ae8d203222e982fcfbab53faa8d3ce525a478 FOREIGN KEY (Продукты) REFERENCES Продукты; 
CREATE INDEX Indexc68ae8d203222e982fcfbab53faa8d3ce525a478 on СоставБлюда (Продукты); 

 ALTER TABLE СоставБлюда ADD CONSTRAINT FK7a5c9fe95de846134b94cee34d087ca2ef97d512 FOREIGN KEY (Блюда) REFERENCES Блюда; 
CREATE INDEX Index7a5c9fe95de846134b94cee34d087ca2ef97d512 on СоставБлюда (Блюда); 

 ALTER TABLE ЗаказБлюд ADD CONSTRAINT FKee17df0e4878fbaace78550d5f900d89cfa6b26f FOREIGN KEY (Блюда) REFERENCES Блюда; 
CREATE INDEX Indexee17df0e4878fbaace78550d5f900d89cfa6b26f on ЗаказБлюд (Блюда); 

 ALTER TABLE ЗаказБлюд ADD CONSTRAINT FKc87b2d1f0dc9a68e746d8e9784b6463010dd372a FOREIGN KEY (Заказы) REFERENCES Заказы; 
CREATE INDEX Indexc87b2d1f0dc9a68e746d8e9784b6463010dd372a on ЗаказБлюд (Заказы); 

 ALTER TABLE ЗаказНапитков ADD CONSTRAINT FKe184ec8b8361ee9abdf5e3cbc6b53abf9b53c93e FOREIGN KEY (Напитки) REFERENCES Напитки; 
CREATE INDEX Indexe184ec8b8361ee9abdf5e3cbc6b53abf9b53c93e on ЗаказНапитков (Напитки); 

 ALTER TABLE ЗаказНапитков ADD CONSTRAINT FKb8c9157d68438640e7ad5900171d9400eacc9a52 FOREIGN KEY (Заказы) REFERENCES Заказы; 
CREATE INDEX Indexb8c9157d68438640e7ad5900171d9400eacc9a52 on ЗаказНапитков (Заказы); 

 ALTER TABLE СоставНапитков ADD CONSTRAINT FK481abd7f3079f535b8278ff6368cf228a6c183f9 FOREIGN KEY (Продукты) REFERENCES Продукты; 
CREATE INDEX Index481abd7f3079f535b8278ff6368cf228a6c183f9 on СоставНапитков (Продукты); 

 ALTER TABLE СоставНапитков ADD CONSTRAINT FK68884191b855dc817689cc8c85793283c2dc36cc FOREIGN KEY (Напитки) REFERENCES Напитки; 
CREATE INDEX Index68884191b855dc817689cc8c85793283c2dc36cc on СоставНапитков (Напитки); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

