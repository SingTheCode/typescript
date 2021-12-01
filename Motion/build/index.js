"use strict";
var navIamge = document.querySelector("#navImage");
var navVideo = document.querySelector("#navVideo");
var navNote = document.querySelector("#navNote");
var navTask = document.querySelector("#navTask");
var modal = document.querySelector(".modal");
var modalBackground = document.querySelector(".modalBackground");
var openImage = function () {
    console.log("1");
    modal.classList.remove("hidden");
    modalBackground.classList.remove("hidden");
};
navIamge.addEventListener("click", openImage);
// navVideo.addEventListener("click", openVideo);
// navNote.addEventListener("click", openNote);
// navTask.addEventListener("click", openTask);
