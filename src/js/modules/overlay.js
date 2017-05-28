'use strict';

var
  $overlay = $('.overlay');

function show() {
  $overlay.addClass('overlay_visible');
}

function hide() {
  $overlay.removeClass('overlay_visible');
}

export default {
  show: show,
  hide: hide
};