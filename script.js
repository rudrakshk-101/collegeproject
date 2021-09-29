burger=document.querySelector('.burger');
submitbtn=document.getElementById("submitbtn")
navbar=document.querySelector('.navbar');
navList=document.querySelector('.nav-list');
rightNav=document.querySelector('.rightnav');
aftersubmit=document.querySelector('.aftersubmit');

burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})
function myFunction() {
    document.getElementById("contact").style.display = 'none';
    document.getElementById("aftersubmit").style.display = 'flex';
    console.log("dsag");
  }



  upscrol=document.querySelector('.upscrol');
var elmnt = document.getElementById("wholec");

var x=250;
window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;    
    if(scrollPosition>1100)
    {
        upscrol.classList.add('upclicked')
    }
    else{
        upscrol.classList.remove('upclicked')
    }
    });