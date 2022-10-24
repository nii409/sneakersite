
"use strict";

{

/* Navigation */
//
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navi = document.getElementById('navi');
const hamburgerMenuSections = document.querySelectorAll('.hamburger-menu-section');
const mask = document.getElementById('mask');

// ハンバーガーメニューをクリックした時の処理
hamburgerMenu.addEventListener('click', function () {
  hamburgerMenu.classList.toggle('open');
  mask.classList.toggle('open');
  navi.classList.toggle('open');
});

// ナビゲーション内の各セクションをクリックしたら、ナビゲーションを閉じる
hamburgerMenuSections.forEach((hamburgerMenuSection) => {
  hamburgerMenuSection.addEventListener('click', function () {
    hamburgerMenu.classList.remove('open');
    navi.classList.remove('open');
    mask.classList.remove('open');
  });
});

// マスクが掛かっている際、マスククリックでもナビゲーションを閉じる
mask.addEventListener('click', function () {
  hamburgerMenu.classList.remove('open');
  navi.classList.remove('open');
  mask.classList.remove('open');
});



/* FadeIn */
// 
const fadeTargets = document.querySelectorAll(".fade-in");

const fadeOption = {
 root: null,
//  rootMargin: "50px 0px",
 threshold: [0.8]
};

const targets = (entries, observer) => {
 entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    }
  )
}

const fadeObserver = new IntersectionObserver(targets, fadeOption);

fadeTargets.forEach((target) => {
  fadeObserver.observe(target);
});



/* SmoothScroll */
// 
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');

for (let i = 0;i < smoothScrollTrigger.length; i++) {
  smoothScrollTrigger[i].addEventListener('click', (e) => {
    e.preventDefault();
    let href = smoothScrollTrigger[i].getAttribute('href');
    let targetElement = document.getElementById(href.replace('#',''));
    const rect = targetElement.getBoundingClientRect().top;
    const offset = window.pageYOffset;
    const gap = 80;
    const target = rect + offset - gap;

    window.scrollTo({
      top: target,
      behavior: 'smooth',
    });

    smoothScroll.init({
      speed: 2000 ,
    });
  });
}
// window.scrollTo はウィンドウ表示位置を絶対的にスクロールする際に使用しますが、 
// window.scroll を使用しても同様の効果を実現できます。 
// 相対的にスクロールする際には window.scrollBy を使用してください。



/* Slick jQuery */ 
// 
      $(document).ready(function() {
        $('.slick-area').slick({
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: '100px',
          slidesToShow: 3,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                centerPadding: '50px',
                slidesToShow: 1
              }
            }
          ]
        });
      });

}