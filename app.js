const sunIcon = document.querySelector(".header__sun-icon")
const moonIcon = document.querySelector(".header__moon-icon")
const headerLogin = document.querySelector(".header__login")
const overlayEl = document.querySelector(".overlay")
const modalInput = document.querySelector(".modal__input--password")

document.getElementById("dark-btn").addEventListener("click", ()=> {
    moonIcon.classList.toggle("hidden")
    sunIcon.classList.toggle("hidden")
    document.querySelector("body").classList.toggle("light-theme")
})

headerLogin.addEventListener("click", ()=> {
    overlayEl.classList.remove("hidden")
})

overlayEl.addEventListener("click", (e)=> {
    if(e.target.classList.contains("overlay")) {
        overlayEl.classList.add("hidden")
    }
})

document.querySelector(".modal__cross-btn").addEventListener("click", ()=> {
    overlayEl.classList.add("hidden")
})

document.querySelector(".modal__eye-btn").addEventListener("click", function() {
    if(modalInput.getAttribute("type") === "password") {
        modalInput.setAttribute("type", "text")
    } else {
        modalInput.setAttribute("type", "password")
    }
})