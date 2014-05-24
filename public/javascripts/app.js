$(function(){

  var onSendEmail = function(){
    $('.send-email').click(function(e){
      e.preventDefault();
      var options = {
        name: $('#name').val(),
        email: $('#email').val(),
        message: $('#message').val()
      };
      $.post('/send', options);
      $('#response').addClass('sent-alert').html('Thank you, I will replay as soon as I can');
      clear();
    });
  };

  var clear = function(){
    $('#name, #email, #message').val('');
    setTimeout(function(){
      $('#response').empty().removeClass('sent-alert');
    }, 10000);
  };

  onSendEmail();

});
