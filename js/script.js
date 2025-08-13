document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
            const mobileMenu = document.querySelector('.mobile-menu');
            
            if (mobileMenuToggle && mobileMenu) {
                mobileMenuToggle.addEventListener('click', function() {
                    mobileMenu.classList.toggle('active');
                    
                    const icon = this.querySelector('i');
                    if (mobileMenu.classList.contains('active')) {
                        icon.className = 'fa-solid fa-times';
                    } else {
                        icon.className = 'fa-solid fa-bars';
                    }
                });
                
                document.addEventListener('click', function(event) {
                    if (!mobileMenuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
                        mobileMenu.classList.remove('active');
                        const icon = mobileMenuToggle.querySelector('i');
                        icon.className = 'fa-solid fa-bars';
                    }
                });
                
                window.addEventListener('resize', function() {
                    if (window.innerWidth > 768) {
                        mobileMenu.classList.remove('active');
                        const icon = mobileMenuToggle.querySelector('i');
                        icon.className = 'fa-solid fa-bars';
                    }
                });
            }
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
});

document.getElementById("dark").addEventListener("click", function () {
    document.querySelector("link[href*='style']").setAttribute("href", "css/dark.css");
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
