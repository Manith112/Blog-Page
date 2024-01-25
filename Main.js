// show list 
const dropOne = document.getElementById("drop-one")
const dropTwo = document.getElementById("drop-two")
const dropThree = document.getElementById("drop-three")
// arrow down 
const arrowOne = document.getElementById("arrow-one")
const arrowTwo = document.getElementById("arrow-two")
const arrowThree = document.getElementById("arrow-three")
// arrow up 
const upOne = document.getElementById("up-one")
const upTwo = document.getElementById("up-two")
const upThree = document.getElementById("up-three")
// mobile 
const burger = document.querySelector(".burger")
const list = document.querySelector(".arrow")
const close = document.querySelector(".close")

// display list
arrowOne.addEventListener("click", function(){
    dropOne.style.display = "flex";
    upOne.style.display = "inline-block";
    arrowOne.style.display = "none"
    dropOne.style.animation = "popup 2s ease-out";
    
})
upOne.addEventListener("click", function(){
    
    upOne.style.display = "none";
    arrowOne.style.display = "inline-block"

    dropOne.style.animation = 'popdown 2s ease-in-out';
    setTimeout(function() {
        dropOne.style.display = "none";
      dropOne.style.animation = '';
    }, 800);
})

arrowTwo.addEventListener("click", function(){
    dropTwo.style.display = "flex";
    upTwo.style.display = "inline-block";
    arrowTwo.style.display = "none"
    dropTwo.style.animation = "popup 2s ease-out";

})
upTwo.addEventListener("click", function(){
    
    upTwo.style.display = "none";
    arrowTwo.style.display = "inline-block"

    dropTwo.style.animation = 'popdown 2s ease-in-out';
    setTimeout(function() {
        dropTwo.style.display = "none";
      dropTwo.style.animation = '';
    }, 800);
})


arrowThree.addEventListener("click", function(){
    dropThree.style.display = "flex";
    upThree.style.display = "inline-block";
    arrowThree.style.display = "none"
    dropThree.style.animation = "popup 2s ease-out";

})
upThree.addEventListener("click", function(){
    
    upThree.style.display = "none";
    arrowThree.style.display = "inline-block"

    dropThree.style.animation = 'popdown 2s ease-in-out';
    setTimeout(function() {
        dropThree.style.display = "none";
      dropThree.style.animation = '';
    }, 800);
})

// mobile list 
burger.addEventListener("click", function(){
    list.style.display = "flex";
    close.style.display = "flex"
    burger.style.display = "none"
    list.style.animation = "popup 2s ease-out"
})

close.addEventListener("click", function(){
    
    close.style.display = "none"
    burger.style.display = "flex"
    list.style.animation = 'popdown 2s ease-in-out';
    setTimeout(function() {
        list.style.display = "none";
      list.style.animation = '';
    }, 800);
})