const menuButton = document.querySelector(".menu_button");
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);

    function viewerTemplate(pic, alt) {
        return `<div class = "viewer">
        <span class="close-viewer">X</span>
        <img class="viewer-image" src="${pic}" alt="large picture">
        </div>`;
    }

  function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    const galleryButton = event.target;

	// get the src attribute from that element and 'split' it on the "-"
    const smallFile = galleryButton.src.split("-");

	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const fullFile = smallFile[0] + "-full.jpeg";

    document.body.insertAdjacentHTML('afterbegin', viewerTemplate(fullFile, "large picture"));

    document.querySelector('.close-viewer').addEventListener('click', closeViewer);
  }

  document.querySelector(".gallery").addEventListener("click", viewHandler);

  function closeViewer() {
    document.querySelector('.viewer').remove();
  }

  