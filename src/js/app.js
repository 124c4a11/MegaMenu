'use strict';

import search from './modules/search';
import overlay from './modules/overlay';

//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
var
  MqL = 1170;


$(document).ready(function() {
  if ($('.search').length && $('.search-trigger')) {
    $('.search-trigger').on('click', toggleSearch);
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