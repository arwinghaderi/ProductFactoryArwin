let hamburgerbox = document.querySelector('.hamburger-box')
let menuMobail = document.querySelector('.menu-mobail')
let menuMobailListitem = document.querySelectorAll('.menu-mobail__list-item')
let courseExperienceCol = document.querySelectorAll('.course-experience__col')
hamburgerbox.addEventListener('click', function () {

  hamburgerbox.classList.toggle('hamburger-box--active')
  menuMobail.classList.toggle('menu-mobail--active')
})


menuMobailListitem.forEach(item => {
  item.addEventListener('click', function () {
    document.querySelector('.menu-mobail__list-item--active').classList.remove('menu-mobail__list-item--active')
    item.classList.add('menu-mobail__list-item--active')

    let attributMobail = item.getAttribute('data-content-id')
    let offsetMobail = document.querySelector(`${attributMobail}`).offsetTop


    window.scrollTo({
      top: offsetMobail + 50,
      behavior: "smooth"

    })



  })

})


courseExperienceCol.forEach(items => {

  items.addEventListener('click', function () {
    document.querySelector('.course-experience__table--active').classList.remove('course-experience__table--active')
    items.classList.add('course-experience__table--active')
    document.querySelector(".course-experience__box-description--show").classList.remove('course-experience__box-description--show')
    let courseExperienceCols=items.getAttribute('content-id')
  document.querySelector(courseExperienceCols).classList.add('course-experience__box-description--show')

  })
})


  



var AskedQuestionsAccordion = document.querySelectorAll('.asked-questions__content-accordion')

AskedQuestionsAccordion.forEach(accordion => {
  accordion.addEventListener('click', function () {
    var content = accordion.nextElementSibling

    if (content.style.height) {
      content.style.height = null
    }

    else {
      content.style.height = content.scrollHeight + 'px'
    }

  })


})






var menuListItem = document.querySelectorAll(".menu__list-item")

menuListItem.forEach(menuListItems => {




  menuListItems.addEventListener('click', function (e) {

    e.preventDefault()

    document.querySelector(".menu__list-item--active").classList.remove('menu__list-item--active')
    menuListItems.classList.add("menu__list-item--active")



    let attribut = menuListItems.getAttribute('data-content-id')
    let ofset = document.querySelector(`${attribut}`).offsetTop

    window.scrollTo({

      top: ofset - 200,

      behavior: "smooth"


    })


  })

})


var scrollByBtn = document.querySelector(".scroll-by__btn")

window.addEventListener("scroll", function () {

  if (window.pageYOffset > 1000) {
    scrollByBtn.classList.add("scroll-by__btn--active")
  }
  else {
    scrollByBtn.classList.remove("scroll-by__btn--active")
  }

})









