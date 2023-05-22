var homeLink = document.querySelector('a[href="#home"');
var introduceLink = document.querySelector('a[href="#introduce"');
var serviceLink = document.querySelector('a[href="#service"');
var constructLink = document.querySelector('a[href="#construct"');
var blogLink = document.querySelector('a[href="#blog"');

homeLink.addEventListener("click", ()=>{
    setActive(homeLink);
});

introduceLink.addEventListener("click", ()=>{
    setActive(introduceLink);
});

serviceLink.addEventListener("click", ()=>{
    setActive(serviceLink);
});

constructLink.addEventListener("click", ()=>{
    setActive(constructLink);
});

blogLink.addEventListener("click", ()=>{
    setActive(blogLink);
});

window.addEventListener("scroll", scrollAnimate);

function scrollAnimate(){
    var introVideo = document.querySelector(".video");
    var introDes = document.querySelector(".descript-container")
    var posVideo = introVideo.getBoundingClientRect().top;
    
    var custComplyCus = document.querySelector(".custComply-customer");
    var custComplyRequire = document.querySelector(".custComply-require");
    var posCustComply = custComplyCus.getBoundingClientRect().top;

    var windowHeight = window.innerHeight;
    console.log(windowHeight);
    if (posVideo < windowHeight) {
        introVideo.classList.add("animate-img");
        introDes.classList.add("animate-des");
    }
    if(posCustComply < windowHeight){
        custComplyCus.classList.add("animate-customer");
        custComplyRequire.classList.add("animate-require");
    }
}


function setActive(ele){
    const menuItem = document.querySelectorAll(".nav-link");
    menuItem.forEach(item => {
        item.classList.remove("active");
    });

    ele.classList.add("active");
}