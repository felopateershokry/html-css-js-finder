
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn button");
    const menuIcon = menuBtn.querySelector("i");
    const sideMenu = document.querySelector(".side-menu");
    const overlay = document.querySelector(".overlay");

    menuBtn.addEventListener("click", function () {
        const isOpen = sideMenu.classList.toggle("active");
        overlay.classList.toggle("active");

    
    });
});


document.getElementById("theme-select").onclick=function(){
    let element = document.querySelector(".theme-list");
    if(element.style.visibility === "hidden"){
        element.style.visibility = "visible";
    }else{
        element.style.visibility = "hidden";
    }
};


document.getElementById("light").addEventListener("click", function () {
    document.querySelector("link[href*='style']").setAttribute("href", "css/style.css");
    document.querySelector(".theme-list").style.visibility = "hidden";
});

document.getElementById("dark").addEventListener("click", function () {
    document.querySelector("link[href*='style']").setAttribute("href", "css/style-dark.css");
    document.querySelector(".theme-list").style.visibility = "hidden";
});

const colors = ['primary', 'success', 'warning', 'danger', 'info'];

    colors.forEach(color =>{
    const colorInput = document.getElementById('color-' + color);
    const textInput = document.getElementById(color + '-hex');

colorInput.addEventListener('input', () => {
    const val = colorInput.value;
    textInput.value = val;
    document.documentElement.style.setProperty(`--color-${color}`, val);
});
});

document.getElementById("close").onclick=function(){
document.querySelector(".customizer").style.visibility = "hidden";
};
document.querySelector(".sett").onclick=function(){
document.querySelector(".customizer").style.visibility = "visible";
};

document.addEventListener("keyup", function(event) {
    if (event.key === "Escape") {
        document.querySelector(".customizer").style.visibility = "hidden";
    }
});
