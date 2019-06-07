const colors = ['brown','red','blue','green','grey'],
      tabs = document.querySelectorAll('.current-picture');

let i = 0,
    toggle = true,
    slideShow;
    
/**
*get element from dom
*@param {string} element
*/
function getE(element) {
    return document.querySelector(element);
}
/**
*run sliders to right side
*/
function goRight() {
    i++; 
    if (colors.length < i) {
        i = 0;
    }
    getE('.slide').style.background = colors[i];
}
/**
*run sliders to left side
*/
function goLeft() {
    i--; 
    if (i < 0) {
        i = colors.length -1;
    }
    getE('.slide').style.background = colors[i];
}
/**
*Playing slidesgow
*/
function runSlide() {
    if(toggle) {
        getE('#play').value = 'Stop';
        slideShow = setInterval(goRight, 1000);
        toggle = false;
    } else {
        getE('#play').value = 'Play';
        clearInterval(slideShow);
        toggle = true;
    }
}
/**
* view picture
*@param {number index}
*/
function viewCurrentPicture(index) {
    getE('.view-picture-container').style.display = 'block';
    getE('.view-picture-container').style.background = colors[index];
} 

function setCurrentPicture(index) {
     getE('.view-picture-container').style.display = 'none';
    getE('.slide').style.background = colors[index];
}
//listeners
getE('.left').addEventListener('click',goLeft);
getE('.right').addEventListener('click',goRight);
getE('#play').addEventListener('click', runSlide);

tabs.forEach(function(tab,index){
   tab.addEventListener('mouseover', function(){
       viewCurrentPicture(index);
   }) 
}); 

tabs.forEach(function(tab,index){
   tab.addEventListener('mouseout', function(){
      getE('.view-picture-container').style.display = 'none';
   }) 
}); 
tabs.forEach(function(tab,index){
   tab.addEventListener('click', function(){
      setCurrentPicture(index);
   }) 
}); 