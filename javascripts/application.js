$(function(){
  $('button').hover(function(){
    $(this).html("<a style=\"font-size: 16px;\"href=\"mailto:contact@paytango.com\">contact@paytango.com</a>")
  }, function(){
    $(this).html("<a  href=\"mailto:contact@paytango.com\">CONTACT US</a>")
  })
});