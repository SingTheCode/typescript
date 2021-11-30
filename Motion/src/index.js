const navIamge = document.querySelector("#navImage");
const navVideo = document.querySelector("#navVideo");
const navNote = document.querySelector("#navNote");
const navTask = document.querySelector("#navTask");
const modal = document.querySelector(".modal");
const modalBackground = document.querySelector(".modalBackground");

const openImage = () => {
  console.log("1");
  modal.classList.remove("hidden");
  modalBackground.classList.remove("hidden");
};

navIamge.addEventListener("click", openImage);
// navVideo.addEventListener("click", openVideo);
// navNote.addEventListener("click", openNote);
// navTask.addEventListener("click", openTask);
