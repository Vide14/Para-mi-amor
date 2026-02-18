var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function () {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

function ($) {
    $.fn.typewriter = function () {
        this.each(function () {
            var $ele = $(this), str = $ele.html(), progress = 0;
            $ele.html('');
        var timer = setInterval(function () {
         var current = str.substr(progress, 1);

        if (current == '<') {
        progress = str.indexOf('>', progress) + 1;
         } else {
        progress++;
        }

    // Si ya terminó, deja TODO el HTML final (incluye "Te amo") y quita cursor
        if (progress >= str.length) {
         clearInterval(timer);
        $ele.html(str);
        document.dispatchEvent(new Event("typewriter:done"));
        return;
    }

    // Mientras escribe: muestra cursor SIN saltar de línea
    $ele.html(str.substring(0, progress) + '<span class="tw-cursor">_</span>');
}, 75);
        });
        return this;
    };
})(jQuery);

function timeElapse(date) {
    var current = new Date(); // ← CORREGIDO
	current.setHours(current.getHours() - 1);
    var seconds = (current.getTime() - date.getTime()) / 1000;

    var days = Math.floor(seconds / (3600 * 24));
    seconds = seconds % (3600 * 24);

    var hours = Math.floor(seconds / 3600);
    if (hours < 10) hours = "0" + hours;

    seconds = seconds % 3600;
    var minutes = Math.floor(seconds / 60);
    if (minutes < 10) minutes = "0" + minutes;

    seconds = Math.floor(seconds % 60);
    if (seconds < 10) seconds = "0" + seconds;

    var result = " <span class=\"digit\">" + days + "</span> días " +
        "<span class=\"digit\">" + hours + "</span> horas " +
        "<span class=\"digit\">" + minutes + "</span> minutos " +
        "<span class=\"digit\">" + seconds + "</span> segundos";
    $("#clock").html(result);
}
