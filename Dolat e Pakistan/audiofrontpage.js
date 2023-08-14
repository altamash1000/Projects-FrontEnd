document.addEventListener('DOMContentLoaded', function() {
    var audioElement = new Audio('Pakistan National Anthem  Synthesia ( Easy Piano Tutorial).mp3');
    audioElement.loop = true;

    document.addEventListener('click', function() {
      audioElement.play();
      document.removeEventListener('click', this);
    });
  });