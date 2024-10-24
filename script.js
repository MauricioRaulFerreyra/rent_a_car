const anim = gsap.timeline()

anim.from('.hero_content',{
  opacity:0,
  duration:1.2,
  x: -700
})

anim.from('.hero_img',{
  opacity:0,
  duration:1.5,
  scale: 0.7,
  x: 700
})

anim.from('.navbar',{
  opacity:0,
  duration:1,
  y: -100
})

anim.from('.bottom_container',{
  opacity:0,
  duration:1,
  y: 200
})

// SHOW MENU

let bar = document.querySelector(".bars")
let menu = document.querySelector(".menu")

bar.addEventListener("click", ()=>{
  menu.classList.toggle('show_menu')
})