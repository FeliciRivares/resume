const githubBoxis = document.querySelector('.github__boxis'),
      greetingText = document.querySelector('.greeting__text'),
      greetingImg = document.querySelector('.greeting__img'),
      nameText = document.querySelector('.name__text'),
      profession = document.querySelector('.profession_container'),
      catLove = document.querySelector('.cat-love_container'),
      professionText = document.querySelector('.profession'),
      catLoveText = document.querySelector('.cat-love'),
      projectsTitle = document.querySelector('.projects-title'),
      laptope = document.querySelectorAll('.laptope'),
      phoneImg = document.querySelectorAll('.phone');

for(let i = 0; i < 366; i++){
    const list = [
        0, 1, 2, 3, 41, 42, 43, 44, 82, 83, 123, 124, 125, 126, 164, 165, 166, 167,
        205, 206, 246, 247, 287, 288, 5, 6, 46, 47, 87, 88, 128, 129, 169, 170, 210,
        211, 251, 252, 292, 293, 8, 9, 14, 15, 49, 50, 51, 90, 91, 92, 131, 132,
        133, 134, 172, 173, 213, 214, 254, 255, 295, 296, 175, 176, 217, 177, 218,
        259, 55, 56, 96, 97, 137, 138, 178, 179, 219, 186, 220, 260, 261, 217, 218, 259,
        260, 261, 301, 302, 17, 18, 19, 58, 59, 60, 61, 62, 99, 100, 102, 103,  140, 141,
        144, 145, 181, 182, 185, 222, 223, 225, 226, 
        263, 264, 265, 266, 267, 304, 305, 306,
        24, 25, 65, 66, 67, 106, 107, 108, 147, 148, 149, 150, 151, 188, 189, 229, 230,
        270, 271, 311, 312, 67, 108, 149, 150, 191, 232, 192, 233, 274, 234, 275,
        316, 194, 235, 276, 154, 195, 236, 73, 114, 155, 33, 34, 74, 75, 115, 116,
        156, 157, 197, 198, 238, 239, 279, 280, 320, 321, 36, 37, 38, 39, 40, 
        77, 78,79, 80, 81, 118, 119, 159, 160, 161, 162, 163,
        200, 201, 202, 203, 204, 241, 242, 282,283, 284, 285, 286,
        323, 324, 325, 326, 327
      ];

    const elem = document.createElement('div')
    elem.classList = list.includes(i) ? 'github__box active' : 'github__box'
    githubBoxis.appendChild(elem);
}
window.addEventListener('scroll', () => {
  let scroll = window.scrollY;
  greetingText.style.transform = `translateY(${scroll * 0.7}px)`
  greetingImg.style.transform = `translate(${scroll * 0.3}px, ${scroll * 0.1}px)`
  nameText.style.transform = `translateX(${scroll * 0.1}px)`
  profession.style.backgroundPositionY = `${scroll * 0.5}px`
  catLove.style.backgroundPositionY = `-${scroll * 0.5}px`
  professionText.style.transform = `translateX(calc( 200vh - ${scroll}px ))`
  catLoveText.style.transform = `translateX(calc( -300vh + ${scroll}px ))`
  projectsTitle.style.transform = `translateY(calc(360vh - ${scroll}px ))`
  phoneImg[0].style.transform  = `translateX(calc( 440vh - ${scroll}px ))`
  phoneImg[1].style.transform  = `translateX(calc( 700vh - ${scroll}px ))`
  laptope[0].style.transform  = `translateX(calc( 560vh - ${scroll}px ))`
})