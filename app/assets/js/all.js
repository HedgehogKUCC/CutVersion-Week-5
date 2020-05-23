$(document).ready(() => {
  $('#menuList').click(function(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'A') {
      return;
    }
    let li = e.target.parentNode;
    $(li).toggleClass('active');
    $(li).siblings().removeClass('active');
  })
});