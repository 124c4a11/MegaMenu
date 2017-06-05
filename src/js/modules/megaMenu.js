'use strict';

var
  $container = $('.mega'),
  $primaryNav = $container.find('.mega__primary-nav');

var
  MqL = 1170;


function open() {
  $primaryNav.addClass('mega__primary-nav_visible');
}


function close() {
  $primaryNav.removeClass('mega__primary-nav_visible');
  $('.mega__item_has-children ul').addClass('mega__list_hidden');
  $('.mega__link_has-children').removeClass('mega__link_selected');
  $('.mega__list_moves-out').removeClass('mega__list_moves-out');
}


function moveNavigation() {
  var
    windowWidth = $(window).width();

  if (windowWidth >= MqL) {
    // if desctop
    $container.detach();
    $container.insertBefore('.page-header__controls');
  } else {
    $container.detach();
    $container.insertAfter('.main-content');
  }
}


export default {
  moveNavigation: moveNavigation,
  open: open,
  close: close
}