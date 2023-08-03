HOME_STRINGS = ["شیء گرا", "فانکشنال", "رویه ای"];

$(document).ready(function () {
    new Typewriter($("#home_text")[0], {
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
        pauseFor: 1500,
        strings: HOME_STRINGS
    });
});
