$(document).ready(function () {

  //detect mob
  window.matchMedia("(max-width: 1024px)").matches
  ? $("body").addClass("mobile")
  : $("body").addClass("pc");

  $('.block5__header').on('click', function () {
    const $header = $(this);
    const isExpanded = $header.attr('aria-expanded') === 'true';

    $('.block5__header').attr('aria-expanded', 'false');
    $('.block5__content').attr('aria-hidden', 'true').hide();

    if (!isExpanded) {
      $header.attr('aria-expanded', 'true');
      $header.next('.block5__content').attr('aria-hidden', 'false').show();
    }
  });
});