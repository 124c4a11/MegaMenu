'use strict';

var
  $search = $('.search');

function open() {
  $search.addClass('search_visible');
}

function close() {
  $search.removeClass('search_visible');
}

export default {
  open: open,
  close: close
};