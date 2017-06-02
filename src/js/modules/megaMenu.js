'use strict';

var
  MqL = 1170;


function close() {

}


function moveNavigation() {
  var
    navigation = $('.mega'),
    windowWidth = $(window).width();

  if (windowWidth >= MqL) {
    // if desctop
    navigation.detach();
    navigation.insertBefore('.page-header__controls');
  } else {
    navigation.detach();
    navigation.appendTo('body');
  }
}

export default {
  moveNavigation: moveNavigation
}