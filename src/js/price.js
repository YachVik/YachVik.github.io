"use strict"
/* Для рассчета стоимости*/
/*1.Через промт*/

/*Создаем массивы для заполнения комбобоксов (селектов) */

let typeSite=[ ["Лендинг", 
                "2000"],
                ["Портфолио", 
                 "3000"],
                ["Промо-сайт",
                "2500"],
                ["Сайт-визитка", 
                 "6000"],
                ["Информационный сайт",
                "30000"],
             ];

let disigneSite=[  ["простой", 
                    "1000"],
                    ["уникальный",
                     "5000"],
                    ["супер крутой",
                    "2500"]
                ];

let adaptivSite=[   ["адаптивная", 
                    "2000"],
                    ["пиксельная",
                     "3000"],
                    ["резиновая",
                     "2500"],
                ];

/*Объект клиентского сайта (сюда будет записываться выбор клиента из каждого селекта (промта))*/

const UserSite={
};

console.log(typeSite);
console.log(adaptivSite);
console.log(disigneSite);

let typeSiteShow="", disigneSiteShow="",adaptivSiteShow="";

let i=0;
typeSite.forEach((item)=>{
        typeSiteShow+=i+'. '+item+' \n';
        typeSiteShow=typeSiteShow.replace(',',' - ')
        i++;
    });
i=0;
  

let choiseType=prompt("Введите номер нужного вам типа сайта:\n"+typeSiteShow);

if(choiseType!=null)
    UserSite.type=Number(typeSite[choiseType][1]);


console.log(UserSite.type);



//Дизайн сайта
disigneSite.forEach((item)=>{
        disigneSiteShow+=i+'. '+item+' \n';
        disigneSiteShow=disigneSiteShow.replace(',',' - ')
        i++;
    });
i=0;

choiseType=prompt("Введите номер нужного вам дизайна сайта:\n"+disigneSiteShow);

if(choiseType!=null)
    UserSite.designe=Number(disigneSite[choiseType][1]);


console.log(UserSite.designe);


//Адаптивность сайта
adaptivSite.forEach((item)=>{
        adaptivSiteShow+=i+'. '+item+' \n';
        adaptivSiteShow=adaptivSiteShow.replace(',',' - ')
        i++;
    });
i=0;

choiseType=prompt("Введите номер:\n"+adaptivSiteShow);

if(choiseType!=null)
    UserSite.adaptiv=Number(adaptivSite[choiseType][1]);


console.log(UserSite.adaptiv);

let cost = UserSite.adaptiv + UserSite.designe + UserSite.type;

if(Number.isNaN(cost))
    alert("Стоимость невозможно рассчитать");
else
    alert("Стоимость: "+cost+" руб.");
