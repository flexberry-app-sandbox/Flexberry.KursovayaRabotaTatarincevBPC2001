﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Kursovaya_rabota_Tatarincev_BPC2001
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Заказы.
    /// </summary>
    [TrimmedStringStorage(false)]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЗаказыE", new string[] {
            "КодЗаказа as \'Код заказа\'",
            "Дата as \'Дата\'",
            "Время as \'Время\'",
            "ТипОплаты as \'Тип оплаты\'",
            "ТипВручения as \'Тип вручения\'",
            "КолПерсон as \'Количество персон\'",
            "Комментарий as \'Комментарий\'",
            "Сумма as \'Сумма\'",
            "Номера as \'Номера\'",
            "Номера.НомерКомнаты as \'Номер комнаты\'",
            "Клиенты as \'Клиенты\'",
            "Клиенты.Фамилия as \'Фамилия клиента\'",
            "Сотрудник as \'Сотрудник \'",
            "Сотрудник.Фамилия as \'Фамилия сотрудника\'"}, Hidden=new string[] {
            "Номера.НомерКомнаты",
            "Клиенты.Фамилия",
            "Сотрудник.Фамилия"})]
    [AssociatedDetailViewAttribute("ЗаказыE", "ЗаказБлюд", "ЗаказБлюдE", true, "", "Заказ блюд", true, new string[] {
            ""})]
    [AssociatedDetailViewAttribute("ЗаказыE", "ЗаказНапитков", "ЗаказНапитковE", true, "", "Заказ напитков", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("ЗаказыE", "Номера", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "НомерКомнаты")]
    [MasterViewDefineAttribute("ЗаказыE", "Клиенты", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Фамилия")]
    [MasterViewDefineAttribute("ЗаказыE", "Сотрудник", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Фамилия")]
    [View("ЗаказыL", new string[] {
            "КодЗаказа as \'Код заказа\'",
            "Дата as \'Дата\'",
            "Время as \'Время\'",
            "ТипОплаты as \'Тип оплаты\'",
            "ТипВручения as \'Тип вручения\'",
            "КолПерсон as \'Количество персон\'",
            "Комментарий as \'Комментарий\'",
            "Сумма as \'Сумма\'",
            "Номера.НомерКомнаты as \'Номер комнаты\'",
            "Клиенты.Фамилия as \'Фамилия клиента\'",
            "Сотрудник.Фамилия as \'Фамилия сотрудника\'"})]
    public class Заказы : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодЗаказа;
        
        private System.DateTime fДата;
        
        private string fВремя;
        
        private IIS.Kursovaya_rabota_Tatarincev_BPC2001.ТипОплаты fТипОплаты;
        
        private IIS.Kursovaya_rabota_Tatarincev_BPC2001.ТипПолучения fТипВручения;
        
        private int fКолПерсон;
        
        private string fКомментарий;
        
        private double fСумма;
        
        private IIS.Kursovaya_rabota_Tatarincev_BPC2001.Номера fНомера;
        
        private IIS.Kursovaya_rabota_Tatarincev_BPC2001.Клиенты fКлиенты;
        
        private IIS.Kursovaya_rabota_Tatarincev_BPC2001.Сотрудник fСотрудник;
        
        private IIS.Kursovaya_rabota_Tatarincev_BPC2001.DetailArrayOfЗаказБлюд fЗаказБлюд;
        
        private IIS.Kursovaya_rabota_Tatarincev_BPC2001.DetailArrayOfЗаказНапитков fЗаказНапитков;
        
        /// <summary>
        /// Время.
        /// </summary>
        // *** Start programmer edit section *** (Заказы.Время CustomAttributes)

        // *** End programmer edit section *** (Заказы.Время CustomAttributes)
        [StrLen(255)]
        public virtual string Время
        {
            get
            {
                // *** Start programmer edit section *** (Заказы.Время Get start)

                // *** End programmer edit section *** (Заказы.Время Get start)
                string result = this.fВремя;
                // *** Start programmer edit section *** (Заказы.Время Get end)

                // *** End programmer edit section *** (Заказы.Время Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказы.Время Set start)

                // *** End programmer edit section *** (Заказы.Время Set start)
                this.fВремя = value;
                // *** Start programmer edit section *** (Заказы.Время Set end)

                // *** End programmer edit section *** (Заказы.Время Set end)
            }
        }
        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (Заказы.Дата CustomAttributes)

        // *** End programmer edit section *** (Заказы.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (Заказы.Дата Get start)

                // *** End programmer edit section *** (Заказы.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (Заказы.Дата Get end)

                // *** End programmer edit section *** (Заказы.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказы.Дата Set start)

                // *** End programmer edit section *** (Заказы.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (Заказы.Дата Set end)

                // *** End programmer edit section *** (Заказы.Дата Set end)
            }
        }
        
        /// <summary>
        /// КодЗаказа.
        /// </summary>
        // *** Start programmer edit section *** (Заказы.КодЗаказа CustomAttributes)

        // *** End programmer edit section *** (Заказы.КодЗаказа CustomAttributes)
        public virtual int КодЗаказа
        {
            get
            {
                // *** Start programmer edit section *** (Заказы.КодЗаказа Get start)

                // *** End programmer edit section *** (Заказы.КодЗаказа Get start)
                int result = this.fКодЗаказа;
                // *** Start programmer edit section *** (Заказы.КодЗаказа Get end)

                // *** End programmer edit section *** (Заказы.КодЗаказа Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказы.КодЗаказа Set start)

                // *** End programmer edit section *** (Заказы.КодЗаказа Set start)
                this.fКодЗаказа = value;
                // *** Start programmer edit section *** (Заказы.КодЗаказа Set end)

                // *** End programmer edit section *** (Заказы.КодЗаказа Set end)
            }
        }
        
        /// <summary>
        /// КолПерсон.
        /// </summary>
        // *** Start programmer edit section *** (Заказы.КолПерсон CustomAttributes)

        // *** End programmer edit section *** (Заказы.КолПерсон CustomAttributes)
        public virtual int КолПерсон
        {
            get
            {
                // *** Start programmer edit section *** (Заказы.КолПерсон Get start)

                // *** End programmer edit section *** (Заказы.КолПерсон Get start)
                int result = this.fКолПерсон;
                // *** Start programmer edit section *** (Заказы.КолПерсон Get end)

                // *** End programmer edit section *** (Заказы.КолПерсон Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказы.КолПерсон Set start)

                // *** End programmer edit section *** (Заказы.КолПерсон Set start)
                this.fКолПерсон = value;
                // *** Start programmer edit section *** (Заказы.КолПерсон Set end)

                // *** End programmer edit section *** (Заказы.КолПерсон Set end)
            }
        }
        
        /// <summary>
        /// Комментарий.
        /// </summary>
        // *** Start programmer edit section *** (Заказы.Комментарий CustomAttributes)

        // *** End programmer edit section *** (Заказы.Комментарий CustomAttributes)
        [StrLen(255)]
        public virtual string Комментарий
        {
            get
            {
                // *** Start programmer edit section *** (Заказы.Комментарий Get start)

                // *** End programmer edit section *** (Заказы.Комментарий Get start)
                string result = this.fКомментарий;
                // *** Start programmer edit section *** (Заказы.Комментарий Get end)

                // *** End programmer edit section *** (Заказы.Комментарий Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказы.Комментарий Set start)

                // *** End programmer edit section *** (Заказы.Комментарий Set start)
                this.fКомментарий = value;
                // *** Start programmer edit section *** (Заказы.Комментарий Set end)

                // *** End programmer edit section *** (Заказы.Комментарий Set end)
            }
        }
        
        /// <summary>
        /// Сумма.
        /// </summary>
        // *** Start programmer edit section *** (Заказы.Сумма CustomAttributes)

        // *** End programmer edit section *** (Заказы.Сумма CustomAttributes)
        public virtual double Сумма
        {
            get
            {
                // *** Start programmer edit section *** (Заказы.Сумма Get start)

                // *** End programmer edit section *** (Заказы.Сумма Get start)
                double result = this.fСумма;
                // *** Start programmer edit section *** (Заказы.Сумма Get end)

                // *** End programmer edit section *** (Заказы.Сумма Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказы.Сумма Set start)

                // *** End programmer edit section *** (Заказы.Сумма Set start)
                this.fСумма = value;
                // *** Start programmer edit section *** (Заказы.Сумма Set end)

                // *** End programmer edit section *** (Заказы.Сумма Set end)
            }
        }
        
        /// <summary>
        /// ТипВручения.
        /// </summary>
        // *** Start programmer edit section *** (Заказы.ТипВручения CustomAttributes)

        // *** End programmer edit section *** (Заказы.ТипВручения CustomAttributes)
        public virtual IIS.Kursovaya_rabota_Tatarincev_BPC2001.ТипПолучения ТипВручения
        {
            get
            {
                // *** Start programmer edit section *** (Заказы.ТипВручения Get start)

                // *** End programmer edit section *** (Заказы.ТипВручения Get start)
                IIS.Kursovaya_rabota_Tatarincev_BPC2001.ТипПолучения result = this.fТипВручения;
                // *** Start programmer edit section *** (Заказы.ТипВручения Get end)

                // *** End programmer edit section *** (Заказы.ТипВручения Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказы.ТипВручения Set start)

                // *** End programmer edit section *** (Заказы.ТипВручения Set start)
                this.fТипВручения = value;
                // *** Start programmer edit section *** (Заказы.ТипВручения Set end)

                // *** End programmer edit section *** (Заказы.ТипВручения Set end)
            }
        }
        
        /// <summary>
        /// ТипОплаты.
        /// </summary>
        // *** Start programmer edit section *** (Заказы.ТипОплаты CustomAttributes)

        // *** End programmer edit section *** (Заказы.ТипОплаты CustomAttributes)
        public virtual IIS.Kursovaya_rabota_Tatarincev_BPC2001.ТипОплаты ТипОплаты
        {
            get
            {
                // *** Start programmer edit section *** (Заказы.ТипОплаты Get start)

                // *** End programmer edit section *** (Заказы.ТипОплаты Get start)
                IIS.Kursovaya_rabota_Tatarincev_BPC2001.ТипОплаты result = this.fТипОплаты;
                // *** Start programmer edit section *** (Заказы.ТипОплаты Get end)

                // *** End programmer edit section *** (Заказы.ТипОплаты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказы.ТипОплаты Set start)

                // *** End programmer edit section *** (Заказы.ТипОплаты Set start)
                this.fТипОплаты = value;
                // *** Start programmer edit section *** (Заказы.ТипОплаты Set end)

                // *** End programmer edit section *** (Заказы.ТипОплаты Set end)
            }
        }
        
        /// <summary>
        /// Заказы.
        /// </summary>
        // *** Start programmer edit section *** (Заказы.Клиенты CustomAttributes)

        // *** End programmer edit section *** (Заказы.Клиенты CustomAttributes)
        [PropertyStorage(new string[] {
                "Клиенты"})]
        [NotNull()]
        public virtual IIS.Kursovaya_rabota_Tatarincev_BPC2001.Клиенты Клиенты
        {
            get
            {
                // *** Start programmer edit section *** (Заказы.Клиенты Get start)

                // *** End programmer edit section *** (Заказы.Клиенты Get start)
                IIS.Kursovaya_rabota_Tatarincev_BPC2001.Клиенты result = this.fКлиенты;
                // *** Start programmer edit section *** (Заказы.Клиенты Get end)

                // *** End programmer edit section *** (Заказы.Клиенты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказы.Клиенты Set start)

                // *** End programmer edit section *** (Заказы.Клиенты Set start)
                this.fКлиенты = value;
                // *** Start programmer edit section *** (Заказы.Клиенты Set end)

                // *** End programmer edit section *** (Заказы.Клиенты Set end)
            }
        }
        
        /// <summary>
        /// Заказы.
        /// </summary>
        // *** Start programmer edit section *** (Заказы.Номера CustomAttributes)

        // *** End programmer edit section *** (Заказы.Номера CustomAttributes)
        [PropertyStorage(new string[] {
                "Номера"})]
        [NotNull()]
        public virtual IIS.Kursovaya_rabota_Tatarincev_BPC2001.Номера Номера
        {
            get
            {
                // *** Start programmer edit section *** (Заказы.Номера Get start)

                // *** End programmer edit section *** (Заказы.Номера Get start)
                IIS.Kursovaya_rabota_Tatarincev_BPC2001.Номера result = this.fНомера;
                // *** Start programmer edit section *** (Заказы.Номера Get end)

                // *** End programmer edit section *** (Заказы.Номера Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказы.Номера Set start)

                // *** End programmer edit section *** (Заказы.Номера Set start)
                this.fНомера = value;
                // *** Start programmer edit section *** (Заказы.Номера Set end)

                // *** End programmer edit section *** (Заказы.Номера Set end)
            }
        }
        
        /// <summary>
        /// Заказы.
        /// </summary>
        // *** Start programmer edit section *** (Заказы.Сотрудник CustomAttributes)

        // *** End programmer edit section *** (Заказы.Сотрудник CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудник"})]
        [NotNull()]
        public virtual IIS.Kursovaya_rabota_Tatarincev_BPC2001.Сотрудник Сотрудник
        {
            get
            {
                // *** Start programmer edit section *** (Заказы.Сотрудник Get start)

                // *** End programmer edit section *** (Заказы.Сотрудник Get start)
                IIS.Kursovaya_rabota_Tatarincev_BPC2001.Сотрудник result = this.fСотрудник;
                // *** Start programmer edit section *** (Заказы.Сотрудник Get end)

                // *** End programmer edit section *** (Заказы.Сотрудник Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказы.Сотрудник Set start)

                // *** End programmer edit section *** (Заказы.Сотрудник Set start)
                this.fСотрудник = value;
                // *** Start programmer edit section *** (Заказы.Сотрудник Set end)

                // *** End programmer edit section *** (Заказы.Сотрудник Set end)
            }
        }
        
        /// <summary>
        /// Заказы.
        /// </summary>
        // *** Start programmer edit section *** (Заказы.ЗаказБлюд CustomAttributes)

        // *** End programmer edit section *** (Заказы.ЗаказБлюд CustomAttributes)
        public virtual IIS.Kursovaya_rabota_Tatarincev_BPC2001.DetailArrayOfЗаказБлюд ЗаказБлюд
        {
            get
            {
                // *** Start programmer edit section *** (Заказы.ЗаказБлюд Get start)

                // *** End programmer edit section *** (Заказы.ЗаказБлюд Get start)
                if ((this.fЗаказБлюд == null))
                {
                    this.fЗаказБлюд = new IIS.Kursovaya_rabota_Tatarincev_BPC2001.DetailArrayOfЗаказБлюд(this);
                }
                IIS.Kursovaya_rabota_Tatarincev_BPC2001.DetailArrayOfЗаказБлюд result = this.fЗаказБлюд;
                // *** Start programmer edit section *** (Заказы.ЗаказБлюд Get end)

                // *** End programmer edit section *** (Заказы.ЗаказБлюд Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказы.ЗаказБлюд Set start)

                // *** End programmer edit section *** (Заказы.ЗаказБлюд Set start)
                this.fЗаказБлюд = value;
                // *** Start programmer edit section *** (Заказы.ЗаказБлюд Set end)

                // *** End programmer edit section *** (Заказы.ЗаказБлюд Set end)
            }
        }
        
        /// <summary>
        /// Заказы.
        /// </summary>
        // *** Start programmer edit section *** (Заказы.ЗаказНапитков CustomAttributes)

        // *** End programmer edit section *** (Заказы.ЗаказНапитков CustomAttributes)
        public virtual IIS.Kursovaya_rabota_Tatarincev_BPC2001.DetailArrayOfЗаказНапитков ЗаказНапитков
        {
            get
            {
                // *** Start programmer edit section *** (Заказы.ЗаказНапитков Get start)

                // *** End programmer edit section *** (Заказы.ЗаказНапитков Get start)
                if ((this.fЗаказНапитков == null))
                {
                    this.fЗаказНапитков = new IIS.Kursovaya_rabota_Tatarincev_BPC2001.DetailArrayOfЗаказНапитков(this);
                }
                IIS.Kursovaya_rabota_Tatarincev_BPC2001.DetailArrayOfЗаказНапитков result = this.fЗаказНапитков;
                // *** Start programmer edit section *** (Заказы.ЗаказНапитков Get end)

                // *** End programmer edit section *** (Заказы.ЗаказНапитков Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заказы.ЗаказНапитков Set start)

                // *** End programmer edit section *** (Заказы.ЗаказНапитков Set start)
                this.fЗаказНапитков = value;
                // *** Start programmer edit section *** (Заказы.ЗаказНапитков Set end)

                // *** End programmer edit section *** (Заказы.ЗаказНапитков Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЗаказыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаказыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаказыE", typeof(IIS.Kursovaya_rabota_Tatarincev_BPC2001.Заказы));
                }
            }
            
            /// <summary>
            /// "ЗаказыL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаказыL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаказыL", typeof(IIS.Kursovaya_rabota_Tatarincev_BPC2001.Заказы));
                }
            }
        }
    }
}
