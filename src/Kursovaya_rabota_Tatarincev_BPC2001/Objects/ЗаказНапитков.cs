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
    /// Заказ напитков.
    /// </summary>
    // *** Start programmer edit section *** (ЗаказНапитков CustomAttributes)

    // *** End programmer edit section *** (ЗаказНапитков CustomAttributes)
    [AutoAltered()]
    [Caption("Заказ напитков")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЗаказНапитковE", new string[] {
            "Комментарий as \'Комментарий\'",
            "Напитки as \'Напитки\'",
            "Напитки.Наименование as \'Наименование\'",
            "Напитки.Стоимость as \'Стоимость напитка\'"}, Hidden=new string[] {
            "Напитки.Наименование"})]
    [MasterViewDefineAttribute("ЗаказНапитковE", "Напитки", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    public class ЗаказНапитков : ICSSoft.STORMNET.DataObject
    {
        
        private string fКомментарий;
        
        private IIS.Kursovaya_rabota_Tatarincev_BPC2001.Напитки fНапитки;
        
        private IIS.Kursovaya_rabota_Tatarincev_BPC2001.Заказы fЗаказы;
        
        // *** Start programmer edit section *** (ЗаказНапитков CustomMembers)

        // *** End programmer edit section *** (ЗаказНапитков CustomMembers)

        
        /// <summary>
        /// Комментарий.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказНапитков.Комментарий CustomAttributes)

        // *** End programmer edit section *** (ЗаказНапитков.Комментарий CustomAttributes)
        [StrLen(255)]
        public virtual string Комментарий
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказНапитков.Комментарий Get start)

                // *** End programmer edit section *** (ЗаказНапитков.Комментарий Get start)
                string result = this.fКомментарий;
                // *** Start programmer edit section *** (ЗаказНапитков.Комментарий Get end)

                // *** End programmer edit section *** (ЗаказНапитков.Комментарий Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказНапитков.Комментарий Set start)

                // *** End programmer edit section *** (ЗаказНапитков.Комментарий Set start)
                this.fКомментарий = value;
                // *** Start programmer edit section *** (ЗаказНапитков.Комментарий Set end)

                // *** End programmer edit section *** (ЗаказНапитков.Комментарий Set end)
            }
        }
        
        /// <summary>
        /// Заказ напитков.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказНапитков.Напитки CustomAttributes)

        // *** End programmer edit section *** (ЗаказНапитков.Напитки CustomAttributes)
        [PropertyStorage(new string[] {
                "Напитки"})]
        [NotNull()]
        public virtual IIS.Kursovaya_rabota_Tatarincev_BPC2001.Напитки Напитки
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказНапитков.Напитки Get start)

                // *** End programmer edit section *** (ЗаказНапитков.Напитки Get start)
                IIS.Kursovaya_rabota_Tatarincev_BPC2001.Напитки result = this.fНапитки;
                // *** Start programmer edit section *** (ЗаказНапитков.Напитки Get end)

                // *** End programmer edit section *** (ЗаказНапитков.Напитки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказНапитков.Напитки Set start)

                // *** End programmer edit section *** (ЗаказНапитков.Напитки Set start)
                this.fНапитки = value;
                // *** Start programmer edit section *** (ЗаказНапитков.Напитки Set end)

                // *** End programmer edit section *** (ЗаказНапитков.Напитки Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Kursovaya_rabota_Tatarincev_BPC2001.Заказы.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказНапитков.Заказы CustomAttributes)

        // *** End programmer edit section *** (ЗаказНапитков.Заказы CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Заказы"})]
        public virtual IIS.Kursovaya_rabota_Tatarincev_BPC2001.Заказы Заказы
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказНапитков.Заказы Get start)

                // *** End programmer edit section *** (ЗаказНапитков.Заказы Get start)
                IIS.Kursovaya_rabota_Tatarincev_BPC2001.Заказы result = this.fЗаказы;
                // *** Start programmer edit section *** (ЗаказНапитков.Заказы Get end)

                // *** End programmer edit section *** (ЗаказНапитков.Заказы Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказНапитков.Заказы Set start)

                // *** End programmer edit section *** (ЗаказНапитков.Заказы Set start)
                this.fЗаказы = value;
                // *** Start programmer edit section *** (ЗаказНапитков.Заказы Set end)

                // *** End programmer edit section *** (ЗаказНапитков.Заказы Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЗаказНапитковE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаказНапитковE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаказНапитковE", typeof(IIS.Kursovaya_rabota_Tatarincev_BPC2001.ЗаказНапитков));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ЗаказНапитков.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfЗаказНапитков CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfЗаказНапитков CustomAttributes)
    public class DetailArrayOfЗаказНапитков : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Kursovaya_rabota_Tatarincev_BPC2001.DetailArrayOfЗаказНапитков members)

        // *** End programmer edit section *** (IIS.Kursovaya_rabota_Tatarincev_BPC2001.DetailArrayOfЗаказНапитков members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ЗаказНапитков by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ЗаказНапитков.
        /// </summary>
        public DetailArrayOfЗаказНапитков(IIS.Kursovaya_rabota_Tatarincev_BPC2001.Заказы fЗаказы) : 
                base(typeof(ЗаказНапитков), ((ICSSoft.STORMNET.DataObject)(fЗаказы)))
        {
        }
        
        public IIS.Kursovaya_rabota_Tatarincev_BPC2001.ЗаказНапитков this[int index]
        {
            get
            {
                return ((IIS.Kursovaya_rabota_Tatarincev_BPC2001.ЗаказНапитков)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Kursovaya_rabota_Tatarincev_BPC2001.ЗаказНапитков dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
