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
    /// Заказ блюд.
    /// </summary>
    // *** Start programmer edit section *** (ЗаказБлюд CustomAttributes)

    // *** End programmer edit section *** (ЗаказБлюд CustomAttributes)
    [AutoAltered()]
    [Caption("Заказ блюд")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЗаказБлюдE", new string[] {
            "Комментарий as \'Комментарий\'",
            "Блюда as \'Блюда\'",
            "Блюда.Наименование as \'Наименование\'",
            "Блюда.Стоимость as \'Стоимость блюда\'"}, Hidden=new string[] {
            "Блюда.Наименование"})]
    [MasterViewDefineAttribute("ЗаказБлюдE", "Блюда", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    public class ЗаказБлюд : ICSSoft.STORMNET.DataObject
    {
        
        private string fКомментарий;
        
        private IIS.Kursovaya_rabota_Tatarincev_BPC2001.Блюда fБлюда;
        
        private IIS.Kursovaya_rabota_Tatarincev_BPC2001.Заказы fЗаказы;
        
        // *** Start programmer edit section *** (ЗаказБлюд CustomMembers)

        // *** End programmer edit section *** (ЗаказБлюд CustomMembers)

        
        /// <summary>
        /// Комментарий.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказБлюд.Комментарий CustomAttributes)

        // *** End programmer edit section *** (ЗаказБлюд.Комментарий CustomAttributes)
        [StrLen(255)]
        public virtual string Комментарий
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказБлюд.Комментарий Get start)

                // *** End programmer edit section *** (ЗаказБлюд.Комментарий Get start)
                string result = this.fКомментарий;
                // *** Start programmer edit section *** (ЗаказБлюд.Комментарий Get end)

                // *** End programmer edit section *** (ЗаказБлюд.Комментарий Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказБлюд.Комментарий Set start)

                // *** End programmer edit section *** (ЗаказБлюд.Комментарий Set start)
                this.fКомментарий = value;
                // *** Start programmer edit section *** (ЗаказБлюд.Комментарий Set end)

                // *** End programmer edit section *** (ЗаказБлюд.Комментарий Set end)
            }
        }
        
        /// <summary>
        /// Заказ блюд.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказБлюд.Блюда CustomAttributes)

        // *** End programmer edit section *** (ЗаказБлюд.Блюда CustomAttributes)
        [PropertyStorage(new string[] {
                "Блюда"})]
        [NotNull()]
        public virtual IIS.Kursovaya_rabota_Tatarincev_BPC2001.Блюда Блюда
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказБлюд.Блюда Get start)

                // *** End programmer edit section *** (ЗаказБлюд.Блюда Get start)
                IIS.Kursovaya_rabota_Tatarincev_BPC2001.Блюда result = this.fБлюда;
                // *** Start programmer edit section *** (ЗаказБлюд.Блюда Get end)

                // *** End programmer edit section *** (ЗаказБлюд.Блюда Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказБлюд.Блюда Set start)

                // *** End programmer edit section *** (ЗаказБлюд.Блюда Set start)
                this.fБлюда = value;
                // *** Start programmer edit section *** (ЗаказБлюд.Блюда Set end)

                // *** End programmer edit section *** (ЗаказБлюд.Блюда Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Kursovaya_rabota_Tatarincev_BPC2001.Заказы.
        /// </summary>
        // *** Start programmer edit section *** (ЗаказБлюд.Заказы CustomAttributes)

        // *** End programmer edit section *** (ЗаказБлюд.Заказы CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Заказы"})]
        public virtual IIS.Kursovaya_rabota_Tatarincev_BPC2001.Заказы Заказы
        {
            get
            {
                // *** Start programmer edit section *** (ЗаказБлюд.Заказы Get start)

                // *** End programmer edit section *** (ЗаказБлюд.Заказы Get start)
                IIS.Kursovaya_rabota_Tatarincev_BPC2001.Заказы result = this.fЗаказы;
                // *** Start programmer edit section *** (ЗаказБлюд.Заказы Get end)

                // *** End programmer edit section *** (ЗаказБлюд.Заказы Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаказБлюд.Заказы Set start)

                // *** End programmer edit section *** (ЗаказБлюд.Заказы Set start)
                this.fЗаказы = value;
                // *** Start programmer edit section *** (ЗаказБлюд.Заказы Set end)

                // *** End programmer edit section *** (ЗаказБлюд.Заказы Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЗаказБлюдE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаказБлюдE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаказБлюдE", typeof(IIS.Kursovaya_rabota_Tatarincev_BPC2001.ЗаказБлюд));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ЗаказБлюд.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfЗаказБлюд CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfЗаказБлюд CustomAttributes)
    public class DetailArrayOfЗаказБлюд : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Kursovaya_rabota_Tatarincev_BPC2001.DetailArrayOfЗаказБлюд members)

        // *** End programmer edit section *** (IIS.Kursovaya_rabota_Tatarincev_BPC2001.DetailArrayOfЗаказБлюд members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ЗаказБлюд by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ЗаказБлюд.
        /// </summary>
        public DetailArrayOfЗаказБлюд(IIS.Kursovaya_rabota_Tatarincev_BPC2001.Заказы fЗаказы) : 
                base(typeof(ЗаказБлюд), ((ICSSoft.STORMNET.DataObject)(fЗаказы)))
        {
        }
        
        public IIS.Kursovaya_rabota_Tatarincev_BPC2001.ЗаказБлюд this[int index]
        {
            get
            {
                return ((IIS.Kursovaya_rabota_Tatarincev_BPC2001.ЗаказБлюд)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Kursovaya_rabota_Tatarincev_BPC2001.ЗаказБлюд dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
