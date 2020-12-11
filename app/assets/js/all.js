$(document).ready(() => {
  $('.replyBtn').click(function () {
    $('.replyGroup').hide();
  });
  $('.cancel').click(function () {
    $('.replyGroup').show();
  });
});