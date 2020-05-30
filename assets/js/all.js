"use strict";

$(document).ready(function () {
  $('#onReply').click(function () {
    $('.bodyText').css('width', '100%');
    $('.bodyText').css('height', '290px');
  });
  $('#onCancel').click(function () {
    $('.bodyText').css('width', '0%');
    $('.bodyText').css('height', '0px');
  });
  $('#iconMoreModal').click(function () {
    if ($(this).text().trim() === 'expand_more') {
      $(this).text('keyboard_arrow_up');
    } else {
      $(this).text('expand_more');
    }
  });
});
//# sourceMappingURL=all.js.map
