let openShareId = document.getElementById("open-share");
let closeShareId = document.getElementById("close-share");
let containerShareId = document.getElementById("share-container");

openShareId.addEventListener("click", toggleHideShare);
closeShareId.addEventListener("click", toggleHideShare);

function toggleHideShare() {
    containerShareId.classList.toggle("hide-me");
}