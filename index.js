//Whenever the user scrolls, this functions executes.
window.onscroll = function() {myFunction()};

//getting the navbar and storing it as a variable.
var navbar = document.getElementById("navbar");

//getting the position when the navbar is offset.
var sticky = navbar.offsetTop;

//adding the sticky class when the navbar reaches its position.
function myFunction(){
    if(window.scrollY >=sticky){
        navbar.classList.add("sticky")
    }else
    {
        navbar.classList.remove("sticky")
    }
}
