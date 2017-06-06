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
    $('.mega__link_has-children').on('click', clickOnHasChildren);
    $('.mega__item_go-back').on('click', clickOnGoBack);
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
    megaMenu.close();

    if ($navTrigger.hasClass('hamburger_close')) {
      $navTrigger.removeClass('hamburger_close');
    }

    if ($overlay.hasClass('overlay_move-left')) {
      $overlay.removeClass('overlay_move-left');
    }

    if ($pageHeader.hasClass('page-header_move-left')) {
      $pageHeader.removeClass('page-header_move-left');
    }

    if ($mainContent.hasClass('main-content_move-left')) {
      $mainContent.removeClass('main-content_move-left');
    }
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


function clickOnHasChildren(e) {
  if (!checkWindowWidth()) e.preventDefault();

  var $selected = $(this);

  if ($selected.next('ul').hasClass('mega__list_hidden')) {
    // desctop version only
    $selected
      .addClass('mega__link_selected')
      .next('ul')
        .removeClass('mega__list_hidden')
        .end()
      .parent('.mega__item_has-children')
        .parent('ul')
          .addClass('mega__list_moves-out');

    $selected
      .parent('.mega__item_has-children')
        .siblings('.mega__item_has-children')
          .children('ul')
            .addClass('mega__list_hidden')
            .end()
      .children('a')
        .removeClass('mega__link_selected');

    overlay.show();
  } else {
    $selected
      .removeClass('mega__link_selected')
      .next('ul')
        .addClass('mega__list_hidden')
        .end()
      .parent('.mega__item_has-children')
        .parent('ul')
          .removeClass('mega__list_moves-out')

    overlay.hide();
  }

  if ($search.hasClass('search_visible')) search.close();
}


function clickOnGoBack() {
  var $goBack = $(this);

  $goBack
    .parent('ul')
      .addClass('mega__list_hidden')
        .parent('.mega__item_has-children')
          .parent('ul')
            .removeClass('mega__list_moves-out')
}


function clickOnOverlay() {
  search.close();
  megaMenu.close();
  overlay.hide();

  if ($overlay.hasClass('overlay_move-left')) {
    $overlay.removeClass('overlay_move-left');
  }

  if ($pageHeader.hasClass('page-header_move-left')) {
    $pageHeader.removeClass('page-header_move-left');
  }

  if ($mainContent.hasClass('main-content_move-left')) {
    $mainContent.removeClass('main-content_move-left');
  }
}


function checkWindowWidth() {
  //check window width (scrollbar included)
  var e = window,
      a = 'inner';
  if (!('innerWidth' in window )) {
      a = 'client';
      e = document.documentElement || document.body;
  }
  if ( e[ a+'Width' ] >= MqL ) {
    return true;
  } else {
    return false;
  }
}