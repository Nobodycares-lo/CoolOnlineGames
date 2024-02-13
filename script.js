window.addEventListener('DOMContentLoaded', function() {
  var logo = document.querySelector('.logo');
  setTimeout(function() {
    logo.style.opacity = 1;
  }, 1000);

  var bigText = document.querySelector('.big-text');
  var smallText = document.querySelector('.small-text');
  setTimeout(function() {
    bigText.classList.add('fade-in');
    smallText.classList.add('fade-in');
  }, 1000);
});
