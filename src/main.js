let nav = document.getElementById("nav");
let links = document.querySelectorAll(".items-list li a");
let linkss = document.querySelectorAll(".cloned-div .items-list li a");
let sections = document.querySelectorAll("section");
let navItems = document.querySelector('.items-list').cloneNode(true)
let copiedDiv = document.querySelector('.cloned-div')
let btn = document.querySelector('.btns').cloneNode(true)
let menuIcon = document.querySelector('.fa-bars')
let toTopBtn = document.querySelector('.fixed-btn')

 var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      loop:true,
      slidesPerView: "auto",
      initialSlide:2,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false, 
      },
      loop: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 350,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });

menuIcon.addEventListener('click',function(){
copiedDiv.classList.toggle('h-0')
copiedDiv.classList.toggle('overflow-hidden')
})
copiedDiv.appendChild(navItems)
copiedDiv.appendChild(btn)
window.onscroll = function () {
  if (scrollY >= 4) {
    nav.classList.add("bg-white", "shadow-md", "py-3");
    nav.classList.remove("py-5");
  } else {
    nav.classList.remove("bg-white", "shadow-md", "py-3");
    nav.classList.add("py-5");
  }
  if(scrollY>300){
    toTopBtn.classList.remove('opacity-0')
    toTopBtn.classList.add('opacity-100')
    toTopBtn.addEventListener('click',function(){
      scrollTo(0,0)
    })
  }
  else{
    toTopBtn.classList.add('opacity-0')
    toTopBtn.classList.remove('opacity-100')
  }
  let scrollPosition = scrollY;
  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop-(.25*section.offsetHeight) &&
      scrollPosition < section.offsetTop + section.offsetHeight
    ) {
      let currentId = section.getAttribute("id");
      removeActivClass();
      addActivClass(currentId);
    }
  });
  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop-(.25*section.offsetHeight) &&
      scrollPosition < section.offsetTop + section.offsetHeight
    ) {
      let currentId = section.getAttribute("id");
      removeActivvClass();
      addActivvClass(currentId);
    }
  });
};

function removeActivClass() {
  links.forEach((link) => {
    link.classList.remove("aktiv-link");
  });
}

function removeActivvClass() {
  linkss.forEach((linkk) => {
    linkk.classList.remove("aktiv-link");
  });
}

function addActivClass(id) {
  let selector = `.items-list li a[href="#${id}"]`;
  document.querySelector(selector).classList.add("aktiv-link");
}
function addActivvClass(id) {
  let selector = `.cloned-div ul li a[href="#${id}"]`;
  document.querySelector(selector).classList.add("aktiv-link");
}

const accordionHeader = document.querySelectorAll(".accordion-header");
accordionHeader.forEach((header) => {
header.addEventListener("click", function () {
    const accordionContent = header.parentElement.querySelector(".accordion-content");
    let accordionMaxHeight = accordionContent.style.maxHeight;
    // Condition handling
    if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
    accordionContent.style.maxHeight = `${accordionContent.scrollHeight + 32}px`;
    header.querySelector(".fas").classList.remove("fa-plus");
    header.querySelector(".fas").classList.add("fa-minus");
    header.parentElement.classList.add("bg-indigo-50");
    header.classList.add('rounded-t-lg')
    header.classList.remove('rounded-lg')
    } else {
    accordionContent.style.maxHeight = `0px`;
    header.querySelector(".fas").classList.add("fa-plus");
    header.querySelector(".fas").classList.remove("fa-minus");
    header.parentElement.classList.remove("bg-indigo-50")
    header.classList.remove('rounded-t-lg')
    header.classList.add('rounded-lg')
    }
});
});
