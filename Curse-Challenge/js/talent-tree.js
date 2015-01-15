$(function() {
   var btn = $('.click'),
       counter = 0,
       max = btn.data('limit'),
       min = btn.data('min'),
       count = $('#count');

  btn.on('click', function() {
    counter++;
    if(counter <= max) {
      count.text(counter);
    }
    if(counter == max) {
      btn.attr("disabled", "true");
    }
  });

  $('.click').mousedown(function(e){
    if( e.button == 2 ) {
      counter--;
      if(counter >= min) {
        count.text(counter);
      }
      // alert('Right mouse button!');
      return false;
    }
    return true;
  });

});

$(document).ready(function(){
  document.oncontextmenu = function() {return false;};
});

$(function() {
  $(".click-2, .click-3, .click-4, .click-6, .click-7, .click-8").attr("disabled", "true");
  $("#talent-1").click(function() {
    $(".click-2").removeAttr("disabled");
    $(this).addClass("talent-bg-active");
    $('.talent-1').addClass("talent-1-active");
  });
  $("#talent-2").click(function() {
    $(".click-3").removeAttr("disabled");
    $(this).addClass("talent-bg-active");
    $('.talent-2').addClass("talent-2-active");
  });
  $("#talent-3").click(function() {
    $(".click-4").removeAttr("disabled");
    $(this).addClass("talent-bg-active");
    $('.talent-3').addClass("talent-3-active");
  });
  $("#talent-4").click(function() {
    $(this).addClass("talent-bg-active");
    $('.talent-4').addClass("talent-4-active");
  });
  $("#talent-5").click(function() {
    $(".click-6").removeAttr("disabled");
    $(this).addClass("talent-bg-active");
    $('.talent-5').addClass("talent-5-active");
  });
  $("#talent-6").click(function() {
    $(".click-7").removeAttr("disabled");
    $(this).addClass("talent-bg-active");
    $('.talent-6').addClass("talent-6-active");
  });
  $("#talent-7").click(function() {
    $(".click-8").removeAttr("disabled");
    $(this).addClass("talent-bg-active");
    $('.talent-7').addClass("talent-7-active");
  });
  $("#talent-8").click(function() {
    $(this).addClass("talent-bg-active");
    $('.talent-8').addClass("talent-8-active");
  });
});
