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

    //modal

    const modalTrigger=document.querySelectorAll('[data-modal]');
    const modal=document.querySelector('.modal');
    const modalCloseBtn=document.querySelector('[data-close]');

    function openModal(){
                modal.classList.add('show');
                modal.classList.remove('hide');
            //или
            // modal.classList.toggle('show');
                document.body.style.overflow='hidden'; 
                clearInterval(openModalTime);
    }

    modalTrigger.forEach(btn=>(btn.addEventListener('click',openModal)));

    function closeModal(){
        modal.classList.add('hide');
        modal.classList.remove('show');
      //или
      //modal.classList.toggle('show');
        document.body.style.overflow='';
    }

    modalCloseBtn.addEventListener('click',closeModal);

 // клик по основному окну - закрытие диалога
 modal.addEventListener('click',(e)=>{
    if (e.target===modal){closeModal();}
 });

 //нажатие кнопки esc - закрытие диалогокна
 document.addEventListener('keydown',(e)=>{
     if ((e.code==='Escape')&&(modal.classList.contains('show'))) {closeModal();}
 });

 // открытие модального окна по времени

 let openModalTime=setTimeout(openModal,6000);

 //открывать окно диалога, если пользователь долистал до конца страницы

 function showModabyScroll(){
    if (window.pageYOffset+ //прокрученная часть окна
    document.documentElement.clientHeight  >= // это открытая часть страницы - на экране. их сумма должна быть ровна или больше длины всего сайта
    document.documentElement.scrollHeight  //-1 глюк некоторых браузеров
   )
   { openModal(); 
     window.removeEventListener('scroll',  showModabyScroll);
   }
 }

 window.addEventListener('scroll',  showModabyScroll);

});

