var homeLink = document.querySelector('a[href="#home"');
var introduceLink = document.querySelector('a[href="#introduce"');
var serviceLink = document.querySelector('a[href="#service"');
var constructLink = document.querySelector('a[href="#construct"');
var blogLink = document.querySelector('a[href="#blog"');

homeLink.addEventListener("click", ()=>{
    setActive(homeLink);
});
a
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


function setActive(ele){
    const menuItem = document.querySelectorAll(".nav-link");
    menuItem.forEach(item => {
        item.classList.remove("active");
    });

    ele.classList.add("active");
}