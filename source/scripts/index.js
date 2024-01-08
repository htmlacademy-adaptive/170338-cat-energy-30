/* в этот файл добавляет скрипты*/
(() => {
  const mainNavigation = document.querySelector('.main-nav');
  const mainNavigationToggle = document.querySelector('.main-nav__toggle');

  mainNavigation.classList.remove('main-nav--no-js');

  mainNavigationToggle.addEventListener('click', () => {
    mainNavigationToggle.classList.toggle('main-nav__toggle--closed');
    mainNavigationToggle.classList.toggle('main-nav__toggle--opened');
  });
})();
