//Меню бургер

const menuIcon = document.querySelector('.burger-icon');
const menuBody = document.querySelector('.menu__list');
if (menuIcon) {
  menuIcon.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    menuIcon.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

//Прокрутка до відповідної секції сайту після нажимання на пункт меню

const menuLinks = document.querySelectorAll('.menu__link[data-goto]'); //шукаються та додаються в змінну тільки ті об'єкти з класом меню-лінк, які мають атрибут го-то.
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY; //робиться прокрутка без запасу зверху для хедера
      //Щоб при нажиманні на посилання в бургер-меню, зникало меню і відбувався перехід на потрібну секцію сайту
      if (menuIcon.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        menuIcon.classList.remove('_active');
        menuBody.classList.remove('_active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth',
      });
      e.preventDefault();
    }
  }
}

// Створюємо галерею зображень із кнопками-перемикачами пір року

const portfolioButtons = document.querySelector('.portfolio__season-buttons');
const portfolioImages = document.querySelectorAll('.portfolio__photo');

portfolioButtons.addEventListener('click', function (e) {
  let targetItem = e.target;
  if (targetItem.closest('.portfolio-btn[data-season="winter"]')) {
    portfolioImages.forEach(
      (img, index) => (img.src = `img/portfolio/winter/${index + 1}.jpg`)
    );
  } else if (targetItem.closest('.portfolio-btn[data-season="spring"]')) {
    portfolioImages.forEach(
      (img, index) => (img.src = `img/portfolio/spring/${index + 1}.jpg`)
    );
  } else if (targetItem.closest('.portfolio-btn[data-season="summer"]')) {
    portfolioImages.forEach(
      (img, index) => (img.src = `img/portfolio/summer/${index + 1}.jpg`)
    );
  } else if (targetItem.closest('.portfolio-btn[data-season="autumn"]')) {
    portfolioImages.forEach(
      (img, index) => (img.src = `img/portfolio/autumn/${index + 1}.jpg`)
    );
  }
});

// Робимо підсвітку активної кнопки

const portfolioButton = document.querySelectorAll('.portfolio-btn');
for (let i = 0; i < portfolioButton.length; i++) {
  const element = portfolioButton[i];
  element.addEventListener('click', function () {
    for (let j = 0; j < portfolioButton.length; j++) {
      portfolioButton[j].classList.remove('portfolio-btn-active');
    }
    this.classList.add('portfolio-btn-active');
  });
}

//прокрутка доверху сайту
const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add('active');
  } else {
    toTop.classList.remove('active');
  }
});
