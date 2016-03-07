
/*  Google Analytics  */
var googleAnalyticsID = 'UA-19400273-25';

var _gaq = _gaq || [];
_gaq.push(['_setAccount', googleAnalyticsID]);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' === document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();



function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$(document).ready(function() {
  // Show 'thank you' message after a form is sent.
  var formHasBeenCompleted = getParameterByName('thank-you');
  var thankYouPanel = document.getElementById('thank-you');

  if (formHasBeenCompleted) {
    thankYouPanel.classList.add('is-visible');
  }




  var weddingGallery = $('.weddings-gallery');
  var weddingGalleryToggle = $('#toggle-wedding-gallery');
  var weddingGalleryFirstItem = $('.weddings-gallery a.first-gallery-item');

  weddingGallery.lightGallery({
    closable: true,
    escKey: true,
    slideEndAnimatoin: true,
    fullScreen: true,
    thumbnail: true
  });

  weddingGalleryToggle.click(function(e){
    e.preventDefault();
    weddingGalleryFirstItem.click();
  });





  var eventGallery = $('.event-gallery');
  var eventGalleryToggle = $('#toggle-event-gallery');
  var eventGalleryFirstItem = $('.event-gallery a.first-gallery-item');

  eventGallery.lightGallery({
    closable: true,
    escKey: true,
    slideEndAnimatoin: true,
    fullScreen: true,
    thumbnail: true
  });

  eventGalleryToggle.click(function(e){
    e.preventDefault();
    eventGalleryFirstItem.click();
  });

});
