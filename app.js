
const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')



const videoList =[video1, video2, video3];

videoList.forEach (function(video){
    video.addEventListener("mouseover", function(){
        video.play()
    })
    video.addEventListener("mouseout", function(){
    video.pause();
})
})

// Sidebar elements //
menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
});

closeIcon.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
    
})




let contact_1 = document.querySelector(".contact-1")

contact_1.addEventListener("click",function() {
    window.location.href="tel:+917569499969";
    console.log("button clicked-1");
    
})


let contact_2 = document.querySelector(".contact-2")

contact_2.addEventListener("click",function() {
    window.location.href="tel:+917569499969";
    console.log("button clicked-2");
    
})

console.log("js loaded");