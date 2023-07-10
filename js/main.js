const list1 = document.querySelector("#list-1");
const list2 = document.querySelector("#list-2");
const list3 = document.querySelector("#list-3");

const item1 = document.querySelector("#item-1");
const item2 = document.querySelector("#item-2");
const item3 = document.querySelector("#item-3");

const excItem = document.querySelector(".exception-item");

const header = document.querySelector("header");

const eng = document.querySelector(".english-version");
const engBtn = document.querySelector("#english-btn");

const links = document.querySelectorAll(".link");

const hamBtn = document.querySelector("#hamburger-btn");

const menuList = document.querySelector(".menu-list");

const navRollUp = document.querySelector(".nav-roll-up");

const slider = document.querySelector(".slider");

const slideContents = document.querySelectorAll(".slide-content");

const nextBtns = document.querySelectorAll(".next-btn");

const prevBtns = document.querySelectorAll(".previous-btn");

const returnBtn = document.querySelector(".return-btn");

const returnIcon = document.querySelector("#return-icon");

const desItems = document.querySelectorAll(".des-item");

const firstDes = document.querySelector(".first-des");
/////////nav bar///////////////////




list1.addEventListener("click", () =>{
    item2.classList = "menu item2 hidden";
    item3.classList = "menu item3 hidden";
    eng.classList = "english-version hidden";
    if(item1.classList.contains("hidden")){
        item1.classList = "menu item1";
    }else{
        item1.classList = "menu item1 hidden";
        
    }
    
})

list2.addEventListener("click", () =>{
    item1.classList = "menu item1 hidden";
    item3.classList = "menu item3 hidden";
    eng.classList = "english-version hidden";
    if(item2.classList.contains("hidden")){
        item2.classList = "menu item2";
    }else{
        item2.classList = "menu item2 hidden";
        // item2.style.transition = "all 0.3s"
    }
})

list3.addEventListener("click", () =>{
    item1.classList = "menu item1 hidden";
    item2.classList = "menu item2 hidden";
     eng.classList = "english-version hidden";
    if(item3.classList.contains("hidden")){
        item3.classList.toggle("hidden");
    }else{
        item3.classList.toggle("hidden");
        // item3.style.transition = "all 0.3s";
    }
})

engBtn.addEventListener("click",() =>{
        item1.classList = "menu item1 hidden";
        item2.classList = "menu item2 hidden";
        item3.classList = "menu item3 hidden";
    if(eng.classList.contains("hidden")){
        eng.classList = "english-version";
    }else{
        eng.classList = "english-version hidden";

    }
});

excItem.addEventListener("click",() =>{
    item1.classList = "menu item1 hidden";
    item2.classList = "menu item2 hidden";
    item3.classList = "menu item3 hidden";
    eng.classList = "english-version hidden";

});


// for(const link of links){

// }

document.addEventListener("click", (event) =>{
   

    if(event.target.id === "link"){
         return;
        
    }
    if(event.target.id === "icon"){
        return;     
   }
   if(event.target.nodeName.toString() === "A" || event.target.nodeName.toString() === "UL" || event.target.nodeName.toString() === "LI" || event.target.nodeName.toString() === "I"){
        return;
   }

    item1.classList = "menu item1 hidden";
    item2.classList = "menu item2 hidden";
    item3.classList = "menu item3 hidden";
    eng.classList = "english-version hidden";
    
})
////////////////////hamburger menu////////////////////
hamBtn.addEventListener("click", () =>{
    if(hamBtn.classList == "fa-solid fa-bars"){
        hamBtn.classList = "fa-solid fa-x";
        menuList.classList.toggle("reveal");
        navRollUp.style.position = "relative";
    }else{
        hamBtn.classList = "fa-solid fa-bars";
        menuList.classList.toggle("reveal");
        navRollUp.style.position = "fixed";
        
    }
});

//////////slider///////////

// slideContent.scrollLeft = 0;

    let pressed = false;

    let scrollLeft;

    let startX;

for(let i = 0;i < nextBtns.length, i < prevBtns.length, i < slideContents.length;i++){
    let sliderWidth = -1 * (slideContents[i].scrollWidth - 1200);

    console.log(nextBtns[i]);
    console.log(prevBtns[i]);
    console.log(slideContents[i]);
    

    function forward(){
        slideContents[i].scrollLeft -= 700;
        
        if(slideContents[i].scrollLeft >= -312){
            prevBtns[i].classList = "previous-btn";
        }
        if(sliderWidth - slideContents[i].scrollLeft > -271){
            
            nextBtns[i].classList.toggle("deactive");
        }

        console.log(slideContents[i].scrollLeft);
        console.log(sliderWidth);
        
    }


    function backward(){
        slideContents[i].scrollLeft += 700;
        // console.log(slideContent.scrollLeft);
        if(slideContents[i].scrollLeft < -100){
            nextBtns[i].classList = "next-btn";
            
        }
        if(slideContents[i].scrollLeft >= -700){
            prevBtns[i].classList = "previous-btn deactive";
    
        }
    
    }

    
    nextBtns[i].addEventListener("click",forward);
    prevBtns[i].addEventListener("click",backward);

    

    let isDown = false;
    let startX;
    let scrollLeft;

    function end(){
        isDown = false;
       slideContents[i].className = "slide-content";
       nextBtns[i].addEventListener("click",forward);
    prevBtns[i].addEventListener("click",backward);
   };
    


   function start(e){
    isDown = true;
    
    slideContents[i].classList = "slide-content grab";
    startX = e.pageX || e.touches[0].pageX - slideContents[i].offsetLeft;
    scrollLeft = slideContents[i].scrollLeft;
    nextBtns[i].addEventListener("click",forward);
    prevBtns[i].addEventListener("click",backward);
    
};



function move(e){
    if(!isDown) return;

    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX - slideContents[i].offsetLeft;
    const dist = (x - startX);
    slideContents[i].scrollLeft = scrollLeft - dist;
    nextBtns[i].addEventListener("click",forward);
    prevBtns[i].addEventListener("click",backward);
    
    if(slideContents[i].scrollLeft < -100){
        nextBtns[i].classList = "next-btn";
        
    }
    if(slideContents[i].scrollLeft >= -700){
        prevBtns[i].classList = "previous-btn deactive";

    }

    if(slideContents[i].scrollLeft >= -312){
        prevBtns[i].classList = "previous-btn";
    }
    if(sliderWidth - slideContents[i].scrollLeft > -271){
        
        nextBtns[i].classList.toggle("deactive");
    }
    
};

(() =>{
    slideContents[i].addEventListener("mousedown",start);
    slideContents[i].addEventListener("touchstart",start);
    slideContents[i].addEventListener("mousemove",move);
    slideContents[i].addEventListener("touchmove",move);
    slideContents[i].addEventListener("mouseup",end);
    slideContents[i].addEventListener("touchend",end);
    slideContents[i].addEventListener("mouseleave",end);
    

    
})();

}
 
///////////return button/////////////

returnBtn.addEventListener("click",() =>{
    
    if(returnBtn.classList.contains("change")){
        returnBtn.classList = "return-btn";
        returnIcon.classList = "fa-solid fa-chevron-up";
        for(const desItem of desItems){
        
            desItem.style.display = "block";
        }
    }else{
        returnBtn.classList = "return-btn change";
        for(const desItem of desItems){
        
            desItem.style.display = "none";
            firstDes.style.display = "block";
        }
        window.scrollTo({top:4050,behavior:"smooth"});

        returnIcon.classList = "fa-solid fa-chevron-down";

    }



    


});

document.addEventListener("scroll",() =>{
    console.log(window.scrollY);
});