const header = document.querySelector("header")
const mainSection = document.querySelector(".section-main")
const mobile = document.querySelector(".menu-mobile")
const btn = document.querySelector("button")
const links = document.querySelectorAll("a")
const headerHeight = header.getBoundingClientRect().height
const navList = document.querySelector(".nav-list")
const menuContainer = document.querySelector("nav")

links.forEach(link =>{
    link.addEventListener("click", ()=>{
        let currentScroll = window.scrollY
        menuContainer.style.height = "0px"
        mobile.classList.remove("open")

        const elementSelected = link.getAttribute("href").slice(1)
        if(elementSelected == "home"){
            scrollBy(0, 0 - currentScroll)

        }

        let elementPosition = (document.getElementsByClassName(elementSelected)[0].getBoundingClientRect().y - headerHeight)
        
        scrollBy(0, elementPosition)
    })
})

btn.addEventListener("click", ()=>{
    const tour = document.querySelector(".tours").getBoundingClientRect().y - headerHeight
    scrollBy(0, tour)
})



mobile.addEventListener("click", () => {
    mobile.classList.toggle("open")
    const menuHeight = menuContainer.getBoundingClientRect().height

    if(menuHeight == 0){
        menuContainer.style.height = `${navList.getBoundingClientRect().height}px`

    } else {
        menuContainer.style.height = "0px"
    }
})



let adjusts = {
    rootMargin: "-310px"
}

const observer = new IntersectionObserver(function (entries, observe) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            header.classList.add("header-diferent")
        } else {
            header.classList.remove("header-diferent")
        }
    })
}, adjusts)

observer.observe(mainSection)