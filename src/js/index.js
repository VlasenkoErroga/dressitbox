import './libs/jquery';

'use strict';
const BURGER = document.getElementById('burger');
const SEARCH_BTN = document.getElementById('search-btn');
const ACC = document.getElementById('acc');
const CARD = document.getElementById('card');
const COPYRIGHT = document.getElementById('time');

function resizeWindow(){
    let width = window.innerWidth;
    window.addEventListener('resize', ()=>{
        width = window.innerWidth;
        rebuildHeader(width);
    })
    rebuildHeader(width);
}
resizeWindow()

function rebuildHeader(width){

    let headerNav = document.getElementsByClassName('header-nav')[0];

    if(width > 992){
        if(CARD){
            CARD.removeAttribute("style");
        }
        if(headerNav){
            headerNav.removeAttribute("style");
        }
        if(burger){
            BURGER.style.display ='none';
        }
        if(ACC){
            ACC.removeAttribute("style");
        }
        if(SEARCH_BTN){
            SEARCH_BTN.removeAttribute("style");
        }
    }
    else{
        if(headerNav){
            headerNav.style.display ='none';
        }
        if(burger){
            BURGER.removeAttribute("style");
        }
        if(ACC){
            ACC.style.display ='none';
        }
        if(SEARCH_BTN){
            SEARCH_BTN.style.display ='none';
        }
        if(CARD){
            CARD.style.display ='none';
        }
    }
}

function copyright() {
    if (COPYRIGHT) {
        COPYRIGHT.textContent = `@ ${new Date().getFullYear()} ${document.location.host}`
    }
}
copyright()