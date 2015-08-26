$(function() {
  $('.expand').click(function(e) {
    e.preventDefault();
    $(this).parent().parent().parent().find('.post-expanded').animate({marginTop : "-35px"}, 50).slideToggle(500);
  });
});