"use strict";
$(document).ready ( function () {
  $(".listaMea").slider({
    animate : "true",
    transitionTime : "2s",
    displayPrevNext : "true",
    infinitTransition : "false",
    slideEl: "div",
    vertical : "true"
  });

  $(".listaTa").slider({
    animate : "true",
    transitionTime : "2s",
    displayPrevNext : "true",
    infinitTransition : "false",
    slideEl: "span",
    vertical : "true"
  });
});
