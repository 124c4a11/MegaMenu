'use strict';

var
  $overlay = $('.overlay'),
  $body = $('body');


function show() {
  $overlay.addClass('overlay_visible');
  $body.addClass('page_overflow-hidden')
}


function hide() {
  $overlay.removeClass('overlay_visible');
  $body.removeClass('page_overflow-hidden');
}


export default {
  show: show,
  hide: hide
};