$(function(){

  var onSendEmail = function(){
    $('.send-email').click(function(e){
      e.preventDefault();
      clearForm();
      var options = {
        name: $('#name').val(),
        email: $('#email').val(),
        message: $('#message').val()
      };
      if (inValid(options)) return;
      $.post('/send', options);
      $('#response').addClass('sent-alert').html('Thank you, I will replay as soon as I can');
      clear();
    });
  };

  var inValid = function(options) {
    for (var attr in options) {
      if (options[attr] == '') {
        if (attr == 'message') $('#message').parent().addClass('has-error has-feedback')
        else $('#'+ attr).parent().addClass('has-error has-feedback');
        return true;
      }
    }
    return false;
  };

  var clear = function(){
    $('#name, #email, #message').val('');
    clearForm();
    setTimeout(function(){
      $('#response').empty().removeClass('sent-alert');
    }, 10000);
  };

  var clearForm = function(){
    $('.form-group').removeClass('has-error has-feedback');
  };

  onSendEmail();

});
