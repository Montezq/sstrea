
$('.stream__left-footer-scrollable').slick({
  speed: 9000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  arrows: false,
  infinite: true
});

$('.stream__left-help-box a').on('click', function(event){
  event.preventDefault();
  $('.stream , .modal').addClass('modal_active');
  $('body').css('overflow', 'hidden')
})
$('.modal__close .close_icon').on('click', function(){
  $('.stream , .modal').removeClass('modal_active');
  $('body').css('overflow', 'auto');
})

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJCgnLnN0cmVhbV9fbGVmdC1mb290ZXItc2Nyb2xsYWJsZScpLnNsaWNrKHtcclxuICBzcGVlZDogOTAwMCxcclxuICBhdXRvcGxheTogdHJ1ZSxcclxuICBhdXRvcGxheVNwZWVkOiAwLFxyXG4gIGNzc0Vhc2U6ICdsaW5lYXInLFxyXG4gIHNsaWRlc1RvU2hvdzogMSxcclxuICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxyXG4gIGFycm93czogZmFsc2UsXHJcbiAgaW5maW5pdGU6IHRydWVcclxufSk7XHJcblxyXG4kKCcuc3RyZWFtX19sZWZ0LWhlbHAtYm94IGEnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAkKCcuc3RyZWFtICwgLm1vZGFsJykuYWRkQ2xhc3MoJ21vZGFsX2FjdGl2ZScpO1xyXG4gICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpXHJcbn0pXHJcbiQoJy5tb2RhbF9fY2xvc2UgLmNsb3NlX2ljb24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICQoJy5zdHJlYW0gLCAubW9kYWwnKS5yZW1vdmVDbGFzcygnbW9kYWxfYWN0aXZlJyk7XHJcbiAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnYXV0bycpO1xyXG59KVxyXG4iXX0=
