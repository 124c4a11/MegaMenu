'use strict';

var
  $search = $('.search'),
  $searchTrigger = $('.search-trigger');


function open() {
  $search.addClass('search_visible');
  $searchTrigger.addClass('loupe_close');
}


function close() {
  $search.removeClass('search_visible');
  $searchTrigger.removeClass('loupe_close');
}


export default {
  open: open,
  close: close
};