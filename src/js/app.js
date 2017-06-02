'use strict';

import search from './modules/search';
import overlay from './modules/overlay';
import megaMenu from './modules/megaMenu.js';

//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
var
  MqL = 1170;


$(document).ready(function() {
  if ($('.search').length && $('.search-trigger')) {
    $('.search-trigger').on('click', toggleSearch);
  }

  if ($('.overlay').length) {
    $('.overlay').on('click', clickOnOverlay);
  }

  if ($('.mega').length) {
    megaMenu.moveNavigation();
  }
});


$(window).on('resize', function() {
  if ($('.mega').length) {
    megaMenu.moveNavigation();
  }
});


function toggleSearch(e) {
  e.preventDefault();

  var $search = $('.search');

  if ($search.hasClass('search_visible')) {
    search.close();
    overlay.hide();
  } else {
    search.open();
    overlay.show();
  }
}


function clickOnOverlay() {
  search.close();
  overlay.hide();
}