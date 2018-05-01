$(() => {
  function markSelection() {
    const selection = $('input:checked').attr('value');
    $('#stars').children().filter(i => i < selection).find('.fa-star')
      .css('font-weight', 900);
  }
  $('.fa-star').mouseenter((e) => {
    const selection = $(e.target).parent().prev().attr('value');
    $('#stars').find('.fa-star').css('font-weight', 400);
    $('#stars').children().filter(i => i < selection).find('.fa-star')
      .css('font-weight', 900);
  });
  $('#stars').mouseleave(() => {
    $('#stars').find('.fa-star').css('font-weight', 400);
    markSelection();
  });
});
