const sunIcon = document.querySelector(".header__sun-icon")
const moonIcon = document.querySelector(".header__moon-icon")
const headerLogin = document.querySelector(".header__login")
const overlayEl = document.querySelector(".overlay")
const modalInput = document.querySelector(".modal__input--password")
const commentList = document.querySelector(".comment__list")
const commentCarouselEl = document.getElementById("comment-carousel")
const commentCarouselScroll = document.querySelector(".comment__right-carousel-scroll")
const commentItem = document.querySelectorAll(".comment__item")
const commentCarouselBtns = document.querySelector(".comment__right-carousel-btns").children

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


commentCarouselEl.style.width = `${100 / commentList.children.length}%`

let commentCount = 0
commentCarouselBtns[0].addEventListener("click", (e)=> {
    if(commentCount > 0) {
        commentCount--
        commentItem.forEach(item=> {
            item.style.transform = `translateX(-${commentCount}00%)`
        })
        commentCarouselEl.style.transform = `translateX(${commentCount}00%)`
    }
})
commentCarouselBtns[1].addEventListener("click", (e)=> {
    if(commentList.children.length - 1 !== commentCount) {
        commentCount++ 
        commentItem.forEach(item=> {
            item.style.transform = `translateX(-${commentCount}00%)`
        })
        commentCarouselEl.style.transform = `translateX(${commentCount}00%)`
    }
})

