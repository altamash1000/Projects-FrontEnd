$(document).ready(function() {
    $(window).scroll(function() {
      $(".policy").each(function() {
        const policyTop = $(this).offset().top;
        const policyBottom = policyTop + $(this).outerHeight();
        const windowTop = $(window).scrollTop();
        const windowBottom = windowTop + $(window).height();

        if (policyBottom > windowTop && policyTop < windowBottom) {
          $(this).addClass("visible");
        } else {
          $(this).removeClass("visible");
        }
      });
    });
  });