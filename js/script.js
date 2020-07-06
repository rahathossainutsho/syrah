var countDownDate = new Date("Aug 20, 2020 23:59:59").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("day").innerHTML = days
  document.getElementById("hour").innerHTML = hours
  document.getElementById("min").innerHTML = minutes
  document.getElementById("sec").innerHTML = seconds
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

$('.update').slick({
    dots:false,
    infinite: true,
    speed: 1000,
    autoplay:true,
    autoplaySpeed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow:'<i class="fa fa-long-arrow-left prev" aria-hidden="true"></i>',
    nextArrow:'<i class="fa fa-long-arrow-right next" aria-hidden="true"></i>',
  });