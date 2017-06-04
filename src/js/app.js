'use strict';

import search from './modules/search';
import overlay from './modules/overlay';
import megaMenu from './modules/megaMenu.js';

var
  $pageHeader = $('.page-header'),
  $mainContent = $('.main-content'),
  $overlay = $('.overlay'),
  $search = $('.search'),
  $navTrigger = $('.nav-trigger'),
  $mega = $('.mega'),
  $megaPrimaryNav = $mega.find('.mega__primary-nav');

//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
var
  MqL = 1170;


$(document).ready(function() {
  if ($search.length && $('.search-trigger')) {
    $('.search-trigger').on('click', toggleSearch);
  }

  if ($overlay.length) {
    $overlay.on('click', clickOnOverlay);
  }

  if ($mega) {
    megaMenu.moveNavigation();
  }

  if ($navTrigger) {
    $navTrigger.on('click', clickOnNavTrigger);
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

function clickOnNavTrigger(e) {
  e.preventDefault();

  if ($megaPrimaryNav.hasClass('mega__primary-nav_visible')) {
    $navTrigger.removeClass('hamburger_close');
    $pageHeader.removeClass('page-header_move-left');
    $mainContent.removeClass('main-content_move-left');
    $overlay.removeClass('overlay_move-left');
    overlay.hide();
    megaMenu.close();
  } else {
    $navTrigger.addClass('hamburger_close');
    $pageHeader.addClass('page-header_move-left');
    $mainContent.addClass('main-content_move-left');
    overlay.show();
    $overlay.addClass('overlay_move-left');
    megaMenu.open();
  }
}


function clickOnOverlay() {
  search.close();
  overlay.hide();
}