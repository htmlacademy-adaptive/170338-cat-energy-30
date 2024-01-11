/* в этот файл добавляет скрипты*/
let map;
async function initMap() {
  const position = { lat: 59.93891906738281, lng: 30.322935104370117 };
  const { Map } = await google.maps.importLibrary('maps'); // eslint-disable-line

  map = new Map(document.querySelector('.contacts__interactive-map'), {
    zoom: 16,
    center: position,
    disableDefaultUI: true,
    mapId: 'DEMO_MAP_ID',
  });

  function getMarkerSize() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      return new google.maps.Size(56, 52); // eslint-disable-line
    } else {
      return new google.maps.Size(113, 106); // eslint-disable-line
    }
  }

  function adjustMapCenter() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1440) {
      const newPosition = {
        lat: position.lat,
        lng: position.lng - 0.001
      };
      map.setCenter(newPosition);
    } else {
      map.setCenter(position);
    }
  }

  /* eslint-disable */
  const marker = new google.maps.Marker({
    position: position,
    map: map,
    icon: {
      url: '../images/map-marker.png',
      scaledSize: getMarkerSize()
    }
  });
  /* eslint-enable */

  window.addEventListener('resize', () => {
    const newSize = getMarkerSize();
    marker.setIcon({
      url: '../images/map-marker.png',
      scaledSize: newSize
    });

    adjustMapCenter();
  });

  adjustMapCenter();
}

(() => {
  const mainNavigation = document.querySelector('.main-nav');
  const mainNavigationToggle = document.querySelector('.main-nav__toggle');

  mainNavigation.classList.remove('main-nav--no-js');

  mainNavigationToggle.addEventListener('click', () => {
    mainNavigationToggle.classList.toggle('main-nav__toggle--closed');
    mainNavigationToggle.classList.toggle('main-nav__toggle--opened');
  });

  window.onload = function () {
    initMap();
  };
})();
