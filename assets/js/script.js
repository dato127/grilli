'use strict';


/**
 * PRELOAD
 * 
 * loading will be end after cocument is loaded
 */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});