$(document).ready(() => {
  $('#onReply').click(function () {
    $('.bodyText').css('width', '100%');
    $('.bodyText').css('height', '290px');
  })

  $('#onCancel').click(function() {
    $('.bodyText').css('width', '0%');
    $('.bodyText').css('height', '0px');
  })
});