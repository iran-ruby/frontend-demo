HOME_STRINGS = ["شیء گرا", "فانکشنال", "رویه ای"];

pages = [
  "home",
  "simplicity",
  "simplicity2",
  "commounity",
  "usage",
  "usage2",
  "usage3",
];
activePage = 6;

$(document).ready(function () {
  function activatePage(index) {
    $(`#${pages[index]}`).addClass("active");
  }

  activatePage(activePage);

  new Typewriter($("#home_text")[0], {
    autoStart: true,
    loop: true,
    deleteSpeed: 30,
    pauseFor: 1500,
    strings: HOME_STRINGS,
  });

  let changingPage = false;

  function animateNext(index) {
    const element = $(`#${pages[index - 1]}`);
    const currentElement = $(`#${pages[index]}`);

    const elementClassName = "animate__animated animate__slideOutUp";
    const currentClassName = "animate__animated animate__slideInUp";

    activatePage(index);
    element.removeClass(elementClassName);
    element.addClass(elementClassName);
    currentElement.addClass(currentClassName);

    setTimeout(() => {
      element.removeClass(elementClassName);
      element.removeClass("active");
      currentElement.removeClass(currentClassName);
    }, 400);
  }

  function animatePrev(index) {
    const element = $(`#${pages[index]}`);
    const prevElement = $(`#${pages[index + 1]}`);

    const className = "animate__animated animate__slideInDown";
    const prevClassName = "animate__animated animate__fadeOutDown";

    prevElement.addClass(prevClassName);

    activatePage(index);
    element.removeClass(className);
    element.addClass(className);

    setTimeout(() => {
      element.removeClass(className);
      prevElement.removeClass(prevClassName).removeClass("active");
    }, 400);
  }

  function nextPage() {
    const next_index = activePage + 1;
    if (next_index <= pages.length - 1) {
      activePage = next_index;
      animateNext(next_index);
    }
  }
  function prevPage() {
    const prev_index = activePage - 1;
    if (prev_index >= 0) {
      activePage = prev_index;
      animatePrev(prev_index);
    }
  }

  $(document).on("wheel", function (e) {
    const delta = e.originalEvent.deltaY;

    if (changingPage != true) {
      changingPage = true;

      if (delta > 0) {
        nextPage();
      }

      if (delta < 0) {
        prevPage();
      }
    }

    // Make delay between changing pages!
    setTimeout(() => {
      changingPage = false;
    }, 750);
  });

  function setLoadingButton(button) {
    const icon = '<i class="las la-circle-notch"></i>';
    if ($(button).has("i").length == 0) {
      $(button).append(icon);
      $(button).addClass("loading");
    }
  }

  window.setLoadingButton = setLoadingButton;
  window.activatePage = activatePage;
  window.activePage = activePage;
  window.nextPage = nextPage;
  window.prevPage = prevPage;
});
