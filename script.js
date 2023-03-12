//MAIN SLIDER***************************************************************************
var slides = document.querySelectorAll('.slide');
var counter = 0;

slides.forEach((slide,index)=>{
    var dis = index* 100 ;
    slide.style.left = dis + '%' ;
})

function slideImage(){
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter*100}%)` ;
    })
}

function changeSlide(e){
    counter = counter + e ;
    if(counter <= 0){
        counter = 0 ;
    }
    if(counter >= 9){
        counter = 9 ;
    }
    slideImage() ;
}



//NEW RELEASE SLIDER**************************************************************************



const leftBtn = document.querySelector(".left");
leftBtn.addEventListener('click', leftScroll);

function leftScroll(){
    var leftButton = document.querySelector(".newReleaseContainer");
    leftButton.scrollBy(-1338,0);
}

const rightBtn = document.querySelector(".right");
rightBtn.addEventListener('click', rightScroll);

function rightScroll(){
    var rightButton = document.querySelector(".newReleaseContainer");
    rightButton.scrollBy(1320,0);
}


var tempId = 0 ;
var setId ;
Array.from(document.getElementsByClassName("playIcon")).forEach((divElement)=>{
    setId = 'playIcon' + tempId ;
    divElement.setAttribute('id' , setId) ;
    tempId++ ;
})

tempId = 0 ;
Array.from(document.getElementsByClassName("newSongMix")).forEach((element)=>{
    setId = 'newSongMix' + tempId ;
    element.setAttribute('id' , setId) ;
    tempId++ ;
})

tempId = 0;
Array.from(document.querySelectorAll(".newSongMix img")).forEach((element)=>{
    setId = 'newSongMixImg' + tempId ;
    element.setAttribute('id', setId) ;
    tempId++ ;
})


function displayIt(x, divId){
    var num = divId.slice(10) ;
    var newId = 'playIcon' + num ;
    var getElement = document.getElementById(newId) ;
    var imgId = 'newSongMixImg' + num;
    var getImg = document.getElementById(imgId) ;
    if(x == 1){
        getElement.classList.add("playIconVisible");
        getImg.style.opacity = '0.5' ;
    }
    if(x == 0){
        getElement.classList.remove("playIconVisible");
        getImg.style.opacity = '1' ;
    }
}

var len = 0;
var i = 0
Array.from(document.getElementsByClassName("playIcon")).forEach((element)=>{
    element.style.left = len + 5 - i + 'vw';
    i += 0.8 ;
    len += 15 ;
})




//TOP CHARTS SLIDER*******************************************************************************



const lBtntc = document.querySelector(".tcleft");
lBtntc.addEventListener('click', tcleftScroll);

function tcleftScroll(){
    var leftButton = document.querySelector(".tcContainer");
    leftButton.scrollBy(-1335,0);
}

const rBtntc = document.querySelector(".tcright");
rBtntc.addEventListener('click', tcrightScroll);

function tcrightScroll(){
    var rightButton = document.querySelector(".tcContainer");
    rightButton.scrollBy(1335,0);
}

//setting playButton to its position
len = 5; i=0 ;
Array.from(document.querySelectorAll(".tcPlayIcon")).forEach((divElement)=>{
    divElement.style.left = len  - i + 'vw';
    i += 0.6 ;
    len += 15 ;
})

//setting id of topChartsDiv , tcPlayIcon and topChartsDiv Img

tempId = 0;
Array.from(document.getElementsByClassName("topChartsDiv")).forEach((element)=>{
    setId = 'tcDiv' + tempId ;
    tempId++ ;
    element.setAttribute('id' , setId);
})

tempId = 0;
Array.from(document.getElementsByClassName("tcPlayIcon")).forEach((element)=>{
    setId = 'tcPlayIcon' + tempId ;
    tempId++ ;
    element.setAttribute('id' , setId);
})

tempId = 0;
Array.from(document.querySelectorAll(".topChartsDiv img")).forEach((element)=>{
    setId = 'tcDivImg' + tempId ;
    tempId++ ;
    element.setAttribute('id' , setId);
})

//displayTc function

function displayTc(x, divId){
    var num = divId.slice(5) ;
    var newId = 'tcPlayIcon' + num ;
    var getElement = document.getElementById(newId) ;
    var imgId = 'tcDivImg' + num;
    var getImg = document.getElementById(imgId) ;
    if(x == 1){
        getElement.classList.add("tcPlayIconVisible");
        getImg.style.opacity = '0.5' ;
    }
    if(x == 0){
        getElement.classList.remove("tcPlayIconVisible");
        getImg.style.opacity = '1' ;
    }
}


// ***********************************TOP INDIE ARTISTS*********************************************

const lBtnti = document.querySelector(".tiLeft");
lBtnti.addEventListener('click', tileftScroll);

function tileftScroll(){
    var leftButton = document.querySelector(".tiContainer");
    leftButton.scrollBy(-1335,0);
}

const rBtnti = document.querySelector(".tiRight");
rBtnti.addEventListener('click', tirightScroll);

function tirightScroll(){
    var rightButton = document.querySelector(".tiContainer");
    rightButton.scrollBy(1335,0);
}
