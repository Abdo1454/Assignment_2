const navMobile = document.getElementById("nav-mobile");
const navList = document.getElementById("nav-list");

function checkScreen() {
    if (window.innerWidth < 768) {
        navList.classList.add("hidden");
        navMobile.classList.remove("hidden");
        navList.style.color = "black";
    } else {
        navList.classList.remove("hidden");
        navMobile.classList.add("hidden");
    }
}

// عند تحميل الصفحة
checkScreen();

// عند تغيير حجم الشاشة
window.addEventListener("resize", checkScreen);

// عند الضغط على زر القائمة
navMobile.addEventListener("click", () => {
    navList.classList.toggle("hidden");
});


const nav = document.querySelector(".nav-content");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.classList.add("background-nav");
    } else {
        nav.classList.remove("background-nav");
    }
});
