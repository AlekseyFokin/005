'use strict';

document.addEventListener("DOMContentLoaded", ()=>{
    
    const tabs=document.querySelectorAll(".tabheader__item");
    const tabContent=document.querySelectorAll(".tabcontent");
    const tabsParent=document.querySelector(".tabheader__items");
    

    function hideTabContent()
    {
       // tabContent.forEach(item=>{item.style.display="none";});
       tabContent.forEach(item=>{
           item.classList.add("hide");
           item.classList.remove("show","fade");

        });
        tabs.forEach(item=>{item.classList.remove("tabheader__item_active");});

    }

    function showTabContent(i=0)
    {
        //tabContent[i].style.display="block";
        tabContent[i].classList.remove("hide");
        tabContent[i].classList.add("show","fade");
        tabs[i].classList.add("tabheader__item_active");
        

    }

    hideTabContent();
    showTabContent();
    tabsParent.addEventListener("click",(event)=>
    {
       if  (event.target&&event.target.classList.contains("tabheader__item"))
       {
        tabs.forEach((item,i)=>{
            if (item==event.target) {hideTabContent();showTabContent(i);} 
        });  
       }
    });

});

